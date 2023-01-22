/*function getData() {
    $.ajax({
        url: '/get_data',
        type: 'GET',
        success: function(data) {
            $('#content').html(data);
            $('.main-title').text('Change personal Data');
        }
    });
}*/


//changePassword.js

function getInputByName (inputName) {
    const inputs = document.getElementsByName(inputName)

    if (inputs.length === 0 || inputs.length > 1) {
        throw new Error(`Input ${inputName} was not found or more than one element was found.`)
    }

    return inputs[0]
}

function getInputValue (input) {
    return input.value
}

const inputNames = {
    password: 'password',
    newPassword: 'new_password1',
    newPasswordRepetead: 'new_password2'
}

function showPasswordsMismatchError () {
    const errorMessage = document.getElementById("errorMessage")
    errorMessage.innerHTML = "New passwords do not match!"
}

function hidePasswordsMismatchError () {
    const errorMessage = document.getElementById("errorMessage")
    errorMessage.innerHTML = ""
}

function shouldSubmitBeEnabled ({ passwordValue, newPasswordValue, newPasswordRepeteadValue }) {
    const inputsValues = [passwordValue, newPasswordValue, newPasswordRepeteadValue]
    const emptyInputs = inputsValues.filter(input => {
        return input === ""
    })
    const doNewPaswordsMatch = newPasswordValue === newPasswordRepeteadValue

    if (doNewPaswordsMatch) {
        hidePasswordsMismatchError()
    } else {
        showPasswordsMismatchError()
    }


    return emptyInputs.length === 0 && doNewPaswordsMatch
}

function setSubmitButtonEnabled (submitButton, enabled) {
    submitButton.disabled = !enabled
    submitButton.style.backgroundColor = enabled ? "#2691d9" : "gray"
    submitButton.style.color = enabled ? "#e9f4fb" : "white"
}

function checkInputs ({ passwordInput, newPasswordInput, newPasswordInputRepeated, submitButton }) {
    const passwordValue = getInputValue(passwordInput)
    const newPasswordValue = getInputValue(newPasswordInput)
    const newPasswordRepeteadValue = getInputValue(newPasswordInputRepeated)

    setSubmitButtonEnabled(submitButton, shouldSubmitBeEnabled({ passwordValue, newPasswordValue, newPasswordRepeteadValue }))
}

function watchInputs () {
    const passwordInput = getInputByName(inputNames.password)
    const newPasswordInput = getInputByName(inputNames.newPassword)
    const newPasswordInputRepeated = getInputByName(inputNames.newPasswordRepetead)
    const submitButton = document.getElementById("submit-change-password")
    const inputs = [passwordInput, newPasswordInput, newPasswordInputRepeated]

    console.log({ inputs })

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            checkInputs({ passwordInput, newPasswordInput, newPasswordInputRepeated, submitButton })
        })
    })

    checkInputs({ passwordInput, newPasswordInput, newPasswordInputRepeated, submitButton })
}

document.addEventListener('DOMContentLoaded', watchInputs)


// stockMarketInfo.js

function applySelectedOptionStyle() {
    const selectFields = document.querySelectorAll("#stock_market, #stock, #period, #interval");
    
    selectFields.forEach(function(selectField) {
    selectField.addEventListener("change", function() {
        selectField.parentElement.classList.add("selected-option");
    });
    });
}

window.onload = applySelectedOptionStyle;

async function callback() {
    let Stock = document.getElementById('stock').value;
    let Period = document.getElementById('period').value;
    let Interval = document.getElementById('interval').value;
    //alert(Stock+Period+Interval);
    //return;
    let response = await fetch("/callback/getStock?data=" + Stock + "&period=" + Period + "&interval=" + Interval);
    if (response.ok) {
        let chartJson = await response.json();
        if (response.ok) {
            response = await fetch("/callback/getInfo?data=" + Stock);
            let infoJson = await response.json();
            info(infoJson);
            Plotly.newPlot('chart', chartJson, {});
        } else {
            alert("HTTP-Error: " + response.status + "on getInfo");
        }
    } else {
        alert("HTTP-Error: " + response.status + "on getStock");
    }
}
function info(json) {
    let name = document.getElementById('companyName');
    name.innerHTML = json.shortName;
    name = document.getElementById('symbol');
    name.innerHTML = json.symbol;
    name = document.getElementById('dayHigh');
    name.innerHTML = json.dayHigh;
    name = document.getElementById('dayLow');
    name.innerHTML = json.dayLow;
}

function getStocks() {
    const stockMarket = document.getElementById("stock_market").value;
    const select = document.getElementById("stock");
    
    select.innerHTML = "";

    fetch(`/callback/getStockMarkets?stockMarket=${stockMarket}`)
    .then(response => response.json())
    .then(data => {
    console.log("Data: ", data);
    const stock = data;
    
    stock.forEach(stock => {
        const option = document.createElement("option");
        option.value = stock;
        option.text = stock;
        select.appendChild(option);
    });
    });
}
