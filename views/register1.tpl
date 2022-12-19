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
            <form method="post" action="/register2">
                <div class="txt_field">
                    <input name="login_name" type="text" required>
                    <span></span>
                    <label>Username</label>
                </div>
                <div class="txt_field">
                    <input type="password" required>
                    <span></span>
                    <label>Password</label>
                </div>
                <div class="txt_field">
                    <input type="password" required>
                    <span></span>
                    <label>Repeat password</label>
                </div>
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>First name</label>
                </div>
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>Surname</label>
                </div>
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>Birth date</label>
                </div>
                <input id="submit_register_1" type="submit" value="Create the account"/>
                <div class="signup_link">
                    Already have the account? <a href="/login">Log in</a>
                </div>
            </form>
        </div>
    </body>
</html>