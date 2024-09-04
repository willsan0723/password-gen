// Assignment code here

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
  let passArray=[];
  let passString="";

  var lengthPassword = window.prompt('How many characters will your password be? Passwords require a minimum of 8 and a maximum of 128 characters.');
  // ensure it's treated as a number
  lengthPassword = parseInt(lengthPassword);

  if (isNaN(lengthPassword) || lengthPassword < 8 || lengthPassword > 128) {
    window.alert("You need to provide a valid answer! Please try again.")
    return generatePassword();
  }
  else {
  lengthPassword = Math.round(lengthPassword);
  }

  let caseLower=confirm('Should your password include lowercase letters?');
  let caseUpper=confirm('Should your password include uppercase letters?')
  let useNumber=confirm('Should your password include numbers?')
  let specialChar=confirm('Should your password include special characters?');

  if (caseLower == false && caseUpper == false && useNumber == false && specialChar == false) {
    window.alert('Please select at least one option.')
    return generatePassword();
  }

  if (caseLower==true){
    passArray.push(hasLower);
  }
  if (caseUpper==true){
    passArray.push(hasUpper) 
  }
  if (useNumber==true){
    passArray.push(hasNumber)
  }
  if (specialChar==true){
    passArray.push(hasSpecial)
  }
  
  for(let i=0;i<lengthPassword;i++){
    let selectedPosition = parseInt(Math.floor(Math.random()*passArray.length));
    let arrayPosition = passArray[selectedPosition];
    let randomPosition = Math.floor(Math.random()*arrayPosition.length);
    let selectedChar = arrayPosition[randomPosition];
    
    passString += selectedChar;
  }

  return passString;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
