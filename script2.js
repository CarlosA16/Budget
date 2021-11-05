
 export function validateSignupForm() {
    var mail = document.getElementById("signEmail").value;
    var password = document.getElementById("signPassword").value;
    console.log(mail)
    console.log(password)
    var creds = [];
    
    creds[0] = mail;
    creds[1] = password;

   return creds;
}

