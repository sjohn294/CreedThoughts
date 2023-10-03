// Assignment Code
var generateBtn = document.querySelector("#generate");
var inputs = [""];
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercases = "abcdefghiklmnopqrsttuvwxtz";
var numbers = "0123456789";
var specials = "*&^%$#@!?><{}";
var randPassword = "";


function generatePassword() {

  var passwordSize = window.prompt("How Long Would You Like Your Password")


  if (passwordSize < 8 || passwordSize > 128 || isNaN(passwordSize)) {
    window.alert("Invalid entry - Please enter a number between 8 and 128");
    return
  }


  var lowercaseCFM = window.confirm("Include lowercase letters?");
  if (lowercaseCFM === true) {
    for (var i = 0; i < lowercases.length; i++) {
      inputs.push(lowercases[i]);
    }
    console.log(inputs)
  }

  var uppercaseCFM = confirm("Include uppercase letters?");
  if (uppercaseCFM === true) {
    for (var i = 0; i < uppercases.length; i++) {
      inputs.push(uppercases[i]);
    }
    console.log(inputs)
  }

  var numberCFM = confirm("Include numbers?");
  if (numberCFM === true) {
    for (var i = 0; i < numbers.length; i++) {
      inputs.push(numbers[i]);
    }
    console.log(inputs)
  }

  var specialsCFM = confirm("Include special characters?");
  if (specialsCFM === true) {
    for (var i = 0; i < specials.length; i++) {
      inputs.push(specials[i]);
    }
    console.log(inputs)
  }


  if (uppercaseCFM === false && numberCFM === false && lowercaseCFM === false && specialsCFM === false) {
    window.alert("You must chose at least 1 type of character.")
    return;
  }

  var randPassword = ""


  const confirmLength = parseInt(passwordSize)


  for (var i = 0; i < confirmLength; i++) {
    inputs[
      Math.floor(Math.random() * inputs.length)];

    randPassword += inputs[
      Math.floor(Math.random() * inputs.length)];
  }
  return randPassword;
}




function writePassword() {



  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




generateBtn.addEventListener("click", writePassword);

