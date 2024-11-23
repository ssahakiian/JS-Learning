const user = {
    firstName: 'John',
    lastName: 'Smith',
    isActive: true
}

for (let i in user) {
    console.log(`${i} : ${user[i]}`)
} 


let count  = 0
const user1 = {
    firstName: 'John',
    lastName: 'Smith',
    isActive: true,
    length: 0
}


for (let i in user1) {
    if (i !== 'length) {
    user1.length = user1.length + 1;
}
}
console.log(user1)



const obj = {}; //literal
const arr = [];



const skills = ['HTML', 'CSS'];

skills.push('Javascript','React'); // add at the end 

skills.unshift('Javascript','React'); // add from the beginning

skills.pop(); // delete the very last index

console.log(skills);



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

//

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

//

const arr = [1, 2, 3, 4];
console.log(arr.reverse());

//


const palindromeName = 'Anna';

const splitData = palindromeName.split('');
const reverseData = splitData.reverse();
const joinData = reverseData.join('');

console.log(joinData.toLowerCase() === palindromeName.toLowerCase());

//

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

