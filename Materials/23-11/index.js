// Log each key-value pair from the user object. Example// firstName : John

const user = {
    firstName: 'John',
    lastName: 'Smith',
    isActive: true
}

for (let i in user) {
    console.log(`${i} : ${user[i]}`)
} 

//Calculate the number of properties in user1 (excluding length) and update length with this count, 
//then logs the updated object.

let count  = 0
const user1 = {
    firstName: 'John',
    lastName: 'Smith',
    isActive: true,
    length: 0
}


for (let i in user1) {
    if (i !== 'length') {
    user1.length = user1.length + 1;
}
}
console.log(user1)

//object vs array

const obj = {}; //literal
const arr = [];


// Menthods and how they work

const skills = ['HTML', 'CSS'];

skills.push('Javascript','React'); // add at the end 

skills.unshift('Javascript','React'); // add from the beginning

skills.pop(); // delete the very last index

console.log(skills);


//This code iterates over an array (arr) containing mixed data types and categorizes the elements 
//into separate arrays based on their type. Four arrays are initialized.


const arr = ['Hello', 3, '2', NaN, {}, false, true, 99, 'JS', null, []];

const str = [];
const numb = [];
const boo = [];
const objects = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        str.push(arr[i]);
    } else if (typeof arr[i] === 'boolean') {
        boo.push (arr[i]);
    } else if (typeof arr[i] === 'object' && arr[i] !== null) {
        objects.push(arr[i])
    } else if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        numb.push(arr[i]);
    }
}

console.log(str);
console.log(boo);
console.log(objects);
console.log(numb);

//Find the minimum and maximum values in an array (arr) and 
//counts how many cycles (iterations) are made during the process.

const arr = [3, 99, 1, 4];
let min = arr[0];
let max = arr[0];
let count = 0

for (let i = 1; i < arr.length; i++) {
    count++
    if (arr[i] > max) {
        max = arr[i];
    } 
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(count);
console.log(min, 'min value');
console.log(max, 'max value');


//Reverse the order of elements in the array arr using the reverse() method 
//and then log the reversed array to the console.

const arr = [1, 2, 3, 4];
console.log(arr.reverse());


//Check if the string is a palindrome by comparing it with its reversed version, ignoring case (comparing by lowercase).


const palindromeName = 'Anna';

const splitData = palindromeName.split('');
const reverseData = splitData.reverse();
const joinData = reverseData.join('');

console.log(joinData.toLowerCase() === palindromeName.toLowerCase());


//Copy the properties from one object (obj1) to another (obj2) 
//and then modify one of the properties in obj2 without touching the same property in obj1.

const obj1 = {
    x: 10,
    y: 20,
    z: 30,
}

const obj2 = {
};

for (let i in obj1) {
        obj2[i] = obj1[i];
}
obj2.x = 100000;
console.log(obj2)

