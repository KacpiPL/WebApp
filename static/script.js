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


function checkPassword() {
    var password = document.getElementsByName("new_password1")[0].value;
    var confirmPassword = document.getElementsByName("new_password2")[0].value;
    if (password !== confirmPassword) {
        document.getElementById("errorMessage").innerHTML = "New passwords do not match!";
    } else {
        document.getElementById("errorMessage").innerHTML = "";
    }
}