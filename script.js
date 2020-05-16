// variables to included all needed characters and to ensure each caracter is included in the password
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var allCharacters = ""
var neededCharacters = ""
var finalpass = ""


// function to generate password dependent on length and other attributes
function generatePassword(){
  
// running the function to ensure user selects character number within specific limits

  var getLength = prompt("How many characters would you like your password to be (8-128)?")
  
  if (getLength < 8 || getLength > 128) {
    alert("Your password must be between 8 or 128 characters, please select again.");
  }
  else {
 

  console.log(getLength)

// confirm statement for lower case characters
var lower = confirm("Would you like to include lower case characters in your password?")

if (lower === true) {
  
  checkLower()
}
console.log(lower);

// confirm statement for upper case characters
var upper = confirm("Would you like to include upper case characters in your password?")

if (upper === true) {
  checkUpper()
}
console.log(upper);

// confirm statement for numberic characters
var number = confirm("Would you like to include numeric characters in your password?")
if (number === true) {
  checkNumber()
}
console.log(number);

// confirm statment for special characters
var special = confirm("Would you like to include special characters in your password?")
if (special === true) {
  checkSpecial()
}                                                              
console.log(special);

// functions to randomly choose a characters from each prompt
function checkLower() {
  var randomLower = lowerChar.charAt(Math.floor(Math.random()*lowerChar.length))
  console.log(randomLower)
  neededCharacters += randomLower
  allCharacters += lowerChar
}

function checkUpper() {
  var randomUpper = upperChar.charAt(Math.floor(Math.random() * upperChar.length))
  console.log(randomUpper)
  neededCharacters += randomUpper
  allCharacters += upperChar
}
function checkNumber(){
  var randomNumber= numberChar.charAt(Math.floor(Math.random() * numberChar.length))
  console.log(randomNumber)
  neededCharacters += randomNumber
  allCharacters += numberChar
 }
function checkSpecial(){
  var randomspecial = specialChar.charAt(Math.floor(Math.random() * specialChar.length))
  console.log(randomspecial)
  neededCharacters += randomspecial
  allCharacters += specialChar
}
console.log(neededCharacters);
console.log(allCharacters);

// loop to include confirmed characters for the length required for password
for (var t = 0; t < getLength; t++) {
  finalpass += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
}
console.log(neededCharacters)

// loop to determine which characters are needed dependent on bulean responses
for (var j=0; j<neededCharacters.length;j++){
  finalpass[j]=neededCharacters[j]
}

console.log(finalpass)

// inputs final pass that meets the criteria into the text box of HTML
return finalpass
  }
}


  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


