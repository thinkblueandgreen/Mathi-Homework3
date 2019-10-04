
var length = prompt("Enter the length of the password"); 
confirm("Do you want to include lower case and uppercase?");
confirm("Do you want numeric character?");
confirm("Do you want Special character?");

function ranPasswordFn() {
var charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
var randomCharset = "";
for (var i = 0; i < length; i++) {
    var j = Math.floor(Math.random() * charset.length);
    randomCharset += charset.charAt(j);
}
return randomCharset;
}

function toBeCopiedFn() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("Password copied to the Clipboard");
  }
