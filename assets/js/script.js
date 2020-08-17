// Assignment code here

let passArray=[];
let hasLower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let hasUpper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let hasNumber=["1","2","3","4","5","6","7","8","9","0"];
let hasSpecial=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var generatePassword = function() {

  let passString="";

  var lengthPassword = parseInt(window.prompt('How many characters will your password be? Passwords require a minimum of 8 and a maximum of 128 characters.'));
  if (lengthPassword === "" || lengthPassword === null || lengthPassword < 8 || lengthPassword > 128) {
  window.alert("You need to provide a valid answer! Please try again.")
  return generatePassword();
  }
  else {
  lengthPassword = Math.round(lengthPassword);
  }

  var caseLower=window.confirm('Should your password include lowercase letters?');
  var caseUpper=window.confirm('Should your password include uppercase letters?');
  var useNumber=window.confirm('Should your password include numbers?')
  var specialChar = window.confirm('Should your password include special characters?');

  if (caseLower == false && caseUpper == false && useNumber == false && specialChar == false) {
    window.alert('Please select at least one option.')
    return generatePassword();
  }

  if (caseLower){
    passArray.push(hasLower);
  }
  if (caseUpper){
    passArray.push(hasUpper);
  }
  if (hasNumber){
    passArray.push(hasNumber);
  }
  if (hasSpecial){
    passArray.push(hasSpecial);
  }
  
  var length = lengthPassword,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+~`'",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
