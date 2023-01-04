<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Portfolio tracker</title>
        <link href="/static/css/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="center">
            <h1 id="h1_login">Login</h1>
            <form action="/login" method="post">
                <div class="txt_field">
                    <input name="login_name" type="text" required>
                    <span></span>
                    <label>Username</label>
                </div>
                <div class="txt_field">
                    <input name="password" type="password" required>
                    <span></span>
                    <label>Password</label>
                </div>
                <input id="submit_login" type="submit" value="Login">
                <div class="signup_link">
                    Don't have the account yet? <a href="/register1">Sign up</a>
                </div>
            </form>
        </div>
    </body>
</html>