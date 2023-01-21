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


/*function checkPassword() {
    var password = document.getElementsByName("new_password1")[0].value;
    var confirmPassword = document.getElementsByName("new_password2")[0].value;
    var submitButton = document.getElementById("submit-change-password");
    if (password !== confirmPassword) {
        document.getElementById("errorMessage").innerHTML = "New passwords do not match!";
    } else {
        document.getElementById("errorMessage").innerHTML = "";
        submitButton.removeAttribute("disabled");
    }
}*/

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