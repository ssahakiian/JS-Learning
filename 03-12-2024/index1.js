// Problem 1:  Find Common Characters Between Two Strings
// Description: Write a program that checks how many characters are common between two strings,
// without using new Set, and  function.

const str1 = "react";
const str2 = "redux";


let commonCount =0; 
let checkedChars = {};


for (let i = 0; i < str1.length; i++) {
     let item = str1[i];
        if (str2.indexOf(item) !== -1 && !checkedChars[item]) {
            commonCount++
            checkedChars[item] = true;
        }      
}

console.log(commonCount, 'commonCount');
console.log(checkedChars, 'checkedChars');
