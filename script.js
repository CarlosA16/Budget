import{validateSignupForm} from 'script2.js'

function validateLoginForm() {
    var mail = document.getElementById("logEmail").value;
    var password = document.getElementById("logPassword").value;
    var creds = validateSignupForm()
    if (mail == creds[0] || password == creds[1]) {
        alert("Successfully logged in");
    }
    else {
        alert("Incorrect Login")
    }
}
validateLoginForm()




