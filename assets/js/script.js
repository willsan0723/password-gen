// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//character arrays
var caseLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caseUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!","?","@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "~", "`"];
var setPassword = [];

var generatePassword = function() {
var lengthPassword = window.prompt('How many characters will your password be? Passwords require a minimum of 8 and no longer than 128 characters.');
if (lengthPassword === "" || lengthPassword === null || lengthPassword < 8 || lengthPassword > 128) {
  window.alert("You need to provide a valid answer! Please try again.")
  return generatePassword();
}
else {
  lengthPassword = Math.round(lengthPassword);
}
//check length only pass through greater than 8 and under 128
var confirmLower = window.confirm('Should your password include lowercase letters?');
if (confirmLower) {
  setPassword = setPassword.concat(caseLower);
}

var confirmUpper = window.confirm('Should your password include uppercase letters?');
if (confirmUpper) {
  setPassword = setPassword.concat(caseUpper);
}

var acceptNum = window.confirm('Should your password include numbers?');
if (acceptNum) {
  setPassword = setPassword.concat(number);
}

var confirmChar = window.confirm('Should your password include special characters?');
if (confirmChar) {
  setPassword = setPassword.concat(char);
}

var length = lengthPassword,
    setPassword,
    retVal = "";
  for (var i = 0, n = setPassword.length; i < length; ++i) {
    retVal += setPassword.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
