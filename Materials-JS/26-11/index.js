//Search for a specific value in an array (6) and log the index of that value if it is found.

const arr = [1, 4, 6, 'JS', '2'];
const searchValue = 6;
let findIndex;

for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item === searchValue) {
        findIndex = i;
        break;
    }
}

console.log(findIndex, 'Find Index')

//indexOf vs includes Array methods

const arr = [1, 4, 6, 'JS', NaN, '2'];

console.log(arr.indexOf(Nan)); // NaN !== NaN, won't work in this case
console.log(arr.includes(NaN)); // includes() recognizes NaN


//Console.log the min and max numbers 

const arr = [9, 2, 7, 4];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    if (item < min ) {
        min = item
    } if (item > max) {
        max = item
    }
}

console.log(min, 'min value');
console.log(max, 'max value');






