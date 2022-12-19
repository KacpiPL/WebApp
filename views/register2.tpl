<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Portfolio tracker</title>
        <link href="/static/css/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="center">
            <h1 id="h1_register">Register</h1>
            <h2 id="h2_register">Address</h2>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>City</label>
                </div>
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>Zip code</label>
                </div>
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>Street</label>
                </div>
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>House number</label>
                </div>
                <div class="txt_field">
                    <input type="text">
                    <span></span>
                    <label>Apartment number</label>
                </div>
                <input type="submit" value="Create the account">
                <div class="signup_link">
                    Already have the account? <a href="/login">Log in</a>
                </div>
            </form>
        </div>
    </body>
</html>