var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'candlestick',
    data: {},
    options: {}
});

function updateChart() {
    var symbol = document.getElementById('symbol').value;
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;

    fetch('/portfolioOverview?symbol=' + symbol + '&start=' + start + '&end=' + end)
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            chart.data = data;
            chart.update();
        })
        .catch(error => {
            console.error(error);
            alert("Error retrieving data. Please try again later.");
        });
}




