// Problem 1: Number of Days in a Month
// Write a function that takes the name of a month as an argument 
// and returns the number of days in that month.
// Requirements: Use switch...case to determine the number of days in the month.
// If the argument does not match any valid month, return "Invalid month".
// Use if...else to check if the current year is a leap year (February should have 29 days in a leap year).

function getDaysInMonth(month) {
    const year = new Date().getFullYear();
    function isLeapYear(year) {
        if (year % 4 === 0) {
            return true;
        }
        return false;
    }

    month = month.toLowerCase();
    switch (month) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            return 31;
        case "april":
        case "june":
        case "september":
        case "november":
            return 30;
        case "february":
            if (isLeapYear(year)) {
                return 29;
            } else { 
                return 28;
            }
        default:
            return "Invalid month";
    }
}
console.log(getDaysInMonth("May"));
console.log(getDaysInMonth("February"));
console.log(getDaysInMonth("Novemberrr"));