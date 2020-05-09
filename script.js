// Assignment Code
var generateBtn = document.querySelector("#generate");

// prompt for password length
var getLength = prompt("How many characters would you like your password to be (8-128)?")


console.log(getLength)

// variables to included all needed characters and to ensure each caracter is included in the password
var allCharacters = []
var neededCharacters = []

// confirm statement for lower case characters
var lower = confirm("Would you like to include lower case characters in your password?")

if (lower === true) {
  lower = "abcdefghijklmnopqrstuvwxyz";
}
console.log(lower);

// confirm statement for upper case characters
var upper = confirm("Would you like to include upper case characters in your password?")

if (upper === true) {
  upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
console.log(upper);

// confirm statement for numberic characters
var number = confirm("Would you like to include numeric characters in your password?")
if (number === true) {
  number = "1234567890";
}
console.log(number);

// confirm statment for special characters
var special = confirm("Would you like to include special characters in your password?")
if (special === true) {
  special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
}                                                              
console.log(special);

// functions to randomly choose a characters from each prompt
function checkLower() {
  return lower.charAt(Math.floor(Math.random() * lower.length));
}
console.log(checkLower);
  
  neededCharacters.push()
  allCharacters = allCharacters.concat()
}
function checkUpper() {
  var upper = upper.chartAt(Math.floor(Math.random() * upper.length))

  neededCharacters.push()
  allCharacters = allCharacters.concat()
}
function checkNumber(){
  var number = number.chartAt(Math.floor(Math.random() * number.length))

  neededCharacters.push()
  allCharacters = allCharacters.concat()
}
function checkSpecial(){
  var special = special.chartAt(Math.floor(Math.random() * special.length))

  neededCharacters.push()
  allCharacters = allCharacters.concat()
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  //loop to determine the necessary number of character and pull character from each array/string
for (var i=0; i<getLength.length;i++) {
var character = allCharacters[Math.floor(Math.random() * allCharacters.length)];

console.log(character);

// final.push(character);
}

for (var j=0; j<neededCharacters.length;j++){

  final[j] = neededCharacters[j]
}

// return final.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
