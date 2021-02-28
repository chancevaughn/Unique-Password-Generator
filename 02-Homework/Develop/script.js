// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "&", "*", "(", ")", "-", "_", "+", "=", "`", "^", "~", "[", "]", "{", "}", "|", ";", ":", "<", ">", "/", "?"];
var prePassword = []

// Write password to the #password input
function writePassword() {
  // Ask for the length of the password
  var passwordLength = window.prompt("Length of the Password?");
  prePassword = [];

  // If user presses cancel, end function
  if (!passwordLength){
    return

    // Check to see if user entered number
  } else if(isNaN(passwordLength)){
    window.alert("Error:\nYou need to enter a number!")
    return;

    // Check to see if number entered was less than 8
  } else if (passwordLength < 8){
    window.alert("Error:\nPassword should be at least 8 characters long!")
    return;

    // Check to see if number entered was greater than 128
  } else if(passwordLength > 128){
    window.alert("Error:\nPassword should be less than 128 characters!")
    return;
  }

  // Inform user of their choice
  window.alert("Your password length will be: " + passwordLength + " characters.")


  // Ask if user would like Lower Case
  userChoiceLowerCase = window.confirm("Would you like to add lower case letters?")

  if (userChoiceLowerCase){
    prePassword.push(lowerCase)
    window.alert("You will have lower case letters.")
  }
  else{
    window.alert("You will not have lower case letters.")
  }

  // Ask if user would like Upper Case
  userChoiceUpperCase = window.confirm("Would you like to add upper case letters?")

  if (userChoiceUpperCase){
    prePassword.push(upperCase)
    window.alert("You will have upper case letters.")
  }
  else{
    window.alert("You will not have upper case letters.")
  }

  // Ask if user would like Numbers
  userChoiceNumbers = window.confirm("Would you like to add numbers?")

  if (userChoiceNumbers){
    prePassword.push(numbers)
    window.alert("You will have numbers.")
  }
  else{
    window.alert("You will not have numbers.")
  }

  // Ask if user would like Special Characters
  userChoiceSpecialCharacters = window.confirm("Would you like to add special characters?")

  if (userChoiceSpecialCharacters){
    prePassword.push(specialCharacters)
    window.alert("You will have special characters.")
  }
  else{
    window.alert("You will not have special characters.")
  }

  // Merge all arrays into one array
  var merged = [].concat.apply([], prePassword);

  // Create a for loop to randomly choose values for password
  var i;
  var password = "";
  for (i = 0; i < passwordLength; i++) {
    password += merged[Math.floor(Math.random()*merged.length)];
}
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
