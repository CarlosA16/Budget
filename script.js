<script src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="index.js"></script>
<script>





function validateLoginForm() {
var name = document.getElementById("logMail").value;
var password = document.getElementById("logPassword").value;

if (mail == "" || password == "") {
document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
return false;
}


else {
alert("Successfully logged in");
return true;
}
}



function validateSignupForm() {
var mail = document.getElementById("signEmail").value;
var password = document.getElementById("signPassword").value;

if (mail == "" || name == "" || password == "") {
document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
return false;
}


else {
alert("Successfully signed up");
return true;
}
}
</script>