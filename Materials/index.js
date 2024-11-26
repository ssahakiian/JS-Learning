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

//

const arr = [1, 4, 6, 'JS', NaN, '2'];

console.log(arr.indexOf(Nan)); // NaN !== NaN
console.log(arr.includes(NaN)); // includes() recognizes NaN

//

const arr = [9, 2, 7, 4]; // console.log the min and max numbers

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


