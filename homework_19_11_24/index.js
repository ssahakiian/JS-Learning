//The program should ask for two numbers and an operation (addition, subtraction, multiplication, or division). Use switch-case, Input: 5, 3, "+"Output: 8

var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /):");
var output;

switch(operation) {
    case '+': output = num1 + num2;break;
    case '-': output = num1 - num2;break;
    case '*': output = num1 * num2;break;
    case '/': 
        if (num2 !== 0) {
            output = num1 / num2
        } else {
            output = 'zero value';
        }
    ;
    default: output = 'Invalid input';
    }

console.log(output);


//Create a program that uses a switch-case to translate a day of the week from English to Armenian. 
//The user should input the name of the day in English, and the program should return the corresponding Armenian name.

var day = prompt ('please input day');
day = day.toLowerCase();
var translatedDay;

switch (day) {
    case 'monday': translatedDay = 'Երկուշաբթի'; break;
    default: translatedDay = 'wrong day';
}

console.log(translatedDay);

//Write a program that takes the number of a month (1-12) and prints which season it belongs to

var month = +prompt('please input month')

if (month === 12 || month === 1 || month === 2) {
        output = 'Winter'
} else if (month === 3 || month === 4 || month === 4) {
    output = 'Spring'
} else if (month === 6 || month === 7 || month === 8) {
    output = 'Summer'
} else if (month === 9 || month === 10 || month === 11) {
    output = 'Autumn'
} else {
    output = 'wrong month'
}

console.log(output);


//Write a program that takes a number as input and checks if it is even or odd

var n = 2;

if (n % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}

//Write a program that takes the user’s score and prints the corresponding grade based on the following rules

var score = +prompt('UserScore')

if (score >= 90 && score <= 100) {
    console.log('A');
} else if (score >= 80 && score <= 89) {
    console.log('B');
} else if (score >= 70 && score <= 79) {
    colsole.log('C');
} else if (score >=60 && score <=69) {
    console.log('D');
} else if (score >= 0 && score <= 59) {
    console.log('F');
} else {
    console.log('Invalid Value')
};
