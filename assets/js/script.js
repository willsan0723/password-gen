// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lengthPassword = window.prompt('How many characters will your password be? Passwords require a minimum of 8 characters.');
if (lengthPassword === "" || lengthPassword === null || lengthPassword < 8) {
  window.alert("You need to provide a valid answer! Please try again.")
  return generatePassword();
}
//check length only pass through greater than 8 and under 128
var caseLower = window.confirm('Should your password include lowercase letters?');
if (caseLower) {
  caseLower = caseLower
}

var caseUpper = window.confirm('Should your password include uppercase letters?');
if (caseUpper) {

}

var specialChar = window.confirm('Should your password include special characters?');
if (specialChar) {

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
