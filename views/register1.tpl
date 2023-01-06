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

                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

                    
                    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

                    <script>
                        $(function() {
                            $("#datepicker").datepicker({
                                dateFormat: "yy-mm-dd",
                                changeMonth: true,
                                changeYear: true,
                                yearRange: "-100:+0"
                            });
                        });
                    </script>

                <div class="txt_field">
                    <input name="birthDate" id = "datepicker" type="text" required>
                    <span></span>
                    <label>Birth date</label>
                </div>
                <div class="txt_field">
                    <input name="city" type="text" required>
                    <span></span>
                    <label>City</label>
                </div>
                <div class="txt_field">
                    <input name="zipCode" type = "text" pattern="\d{2}-\d{3}" maxlength="6"  required oninput="formatZipCode(this)">
                    
                    <span></span>
                    <label>Zip code</label>
                </div>

                <script>
                    function formatZipCode(input) {
                         if (input.value.length > 2 && input.value.indexOf('-') === -1) {
                            input.value = input.value.slice(0, 2) + '-' + input.value.slice(2);
                            }
                    }
                  </script>

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
                    <input name="flatNo" type="text" required>
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