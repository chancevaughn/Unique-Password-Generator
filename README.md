# Unique Password Generator

## Intro

Have you ever been in need of a password and need something and unique?

Well this is the perfect website for you!

## Purpose

This website will generate a unique password set to the parameters that you select. Once it has created a new, unique password for you, it will display it on the screen for you to view or copy.

![Screenshot](website of the image)

## How Does All of This Work?

### On The User End 

Once the user presses the "generate password" button, they are given multiple prompts to configure their password. Such as how long they would like their password to be. If the password should include lower or uppercase letters, numbers, and even special characters. At the conclusion of the prompts, the password is displayed on the screen.

![Screenshot](website of image2)

### The Code Magic

JavaScript is star and heavy lifter of this project. From the time that the user clicks on the "generate password" button, the code goes into action. Multiple '.alert' prompts coupled with if/else statements store the users decisions and display what they've chosen back to them. 

![Screenshot]()

If the user does want the prompted characters in their password, the code will '.push' that designated array into a 'prePassword' array. If they do not want those characters, then the code will alert them of their choice.

![Screenshot]()

At the end the program will concat all of the selected arrays into one array. Then selected random characters from that list and add them to the password. It continues this until the requested length is met. After that, it prints the password on the website. Rinse and repeat. 

![Screenshot]()

Also, the password resets each time the button is pressed because the value is reset each time within the code.

## Contributors

Chance V. Robinson

## License

N/A