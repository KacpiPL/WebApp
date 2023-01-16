import re
import numpy as np
import pandas as pd
import datetime
import yfinance as yf

def get_price_data(symbols, start_date = None, end_date = None):

    if end_date is None:
        end_date = datetime.date.today()
    
    if start_date is None:
        start_date = end_date

    start_date = parse_date(start_date)
    end_date = parse_date(end_date)

    start_date += datetime.timedelta(days = 1) # YFinance API auto subtracts 1 day
    end_date += datetime.timedelta(days = 1)   # we want end_date to be inclusive

    data = yf.download(
        symbols,
        start = start_date,
        end = end_date,
        actions = True,
        group_by = 'ticker'
    )

    return data


def calc_return(price_data, index = 1):
    
    if index < 1:
        raise ValueError("index must be greater than zero")

    def ret(pr, index):

        last  = pr['date'].iloc[0]
        first = pr['date'].iloc[min(index, len(pr))]
        df = pr.loc[pr['date'].isin([last, first])]
        
        return (
            df.loc[:, ['date', 'symbol', 'adj_close']]
            .pivot('symbol', 'date', 'adj_close')
            .assign(
                ret  = lambda df: df[last] / df[first] - 1,
                date = last
            )
        )

    df = pd.concat(
        [ret(tbl, index) for _, tbl in price_data.groupby('symbol')],
        sort = False
    )

    return df[['date', 'ret']]

def parse_date(date):

    if isinstance(date, datetime.datetime):
        return date.date()

    if isinstance(date, datetime.date):
        return date

    if isinstance(date, str):
        date = re.sub(r'[-_/]', '', date)
        date = datetime.datetime.strptime(date, "%Y%m%d")
        return date.date()

    raise TypeError(f"Cannot parse_date for type {type(date).__name__}")
