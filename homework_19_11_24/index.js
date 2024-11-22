//homework5
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


//homework4

var day = prompt ('please input day');
day = day.toLowerCase();
var translatedDay;

switch (day) {
    case 'monday': translatedDay = 'Երկուշաբթի'; break;
    default: translatedDay = 'wrong day';
}

console.log(translatedDay);

//homework3

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

//homework2

var n = 2;

if (n % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}

//homework1

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
