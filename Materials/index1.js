const arr = [9, 2, 7, 4]; // 3,5,6,8; console.log the numbers between min max that are not present
const result = [];

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

for (let i = min; i < max; i++) {
    if (!arr.includes(i)) {
        result.push(i)
    }
}

console.log(result, 'result');
