<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Portfolio tracker</title>
        <link href="/static/css/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="center">
            <h1 id="h1_register">Register</h1>
            <h2 id="h2_register">Personal info</h2>
            <form method="post" action="/register">
                <div class="txt_field">
                    <input name="login_name" type="text" required>
                    <span></span>
                    <label>Username</label>
                </div>
                <div class="txt_field">
                    <input name="password1" type="password" required>
                    <span></span>
                    <label>Password</label>
                </div>
                <div class="txt_field">
                    <input name="password2" type="password" required>
                    <span></span>
                    <label>Repeat password</label>
                </div>
                <div class="txt_field">
                    <input name="name" type="text" required>
                    <span></span>
                    <label>First name</label>
                </div>
                <div class="txt_field">
                    <input name="surname" type="text" required>
                    <span></span>
                    <label>Surname</label>
                </div>
                <div class="txt_field">
                    <input name="birthDate" type="text" required>
                    <span></span>
                    <label>Birth date</label>
                </div>
                <div class="txt_field">
                    <input name="city" type="text" required>
                    <span></span>
                    <label>City</label>
                </div>
                <div class="txt_field">
                    <input name="zipCode" type="text" required>
                    <span></span>
                    <label>Zip code</label>
                </div>
                <div class="txt_field">
                    <input name="street" type="text" required>
                    <span></span>
                    <label>Street</label>
                </div>
                <div class="txt_field">
                    <input name="houseNo" type="text" required>
                    <span></span>
                    <label>House number</label>
                </div>
                <div class="txt_field">
                    <input name="flatNo" type="text">
                    <span></span>
                    <label>Apartment number</label>
                </div>
                <input id="submit_register_1" type="submit" value="Create the account"/>
                <div class="signup_link">
                    Already have the account? <a href="/login">Log in</a>
                </div>
            </form>
        </div>
    </body>
</html>