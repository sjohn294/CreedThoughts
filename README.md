# CreedThoughts
### An event listener was added to the variable **generateBtn** which is connected to the button on the HTML with the *id* *generate*

### variables were created holding strings or the random characters

## the function **generatePassword** was created to:
1. generate a window prompt asking the user to decide how many characters they would like their password to be if the password wasnt between 1 and 128 characters an alert window was returned
2. confirm windows were created to ask the user whether they wanted **upper and/or lowercase, numbers, and/or special case characters** pushing them to the array *inputs*

## the function **writePassword** was created to:
1. call the *generatePassword* function
2. append the generated password to the text area with the *id password* 