//Search for a specific value in an array (6) and log the index of that value 
//if it is found with includes method.

const arr = [1, 4, 6, 'JS', '2'];
const searchValue = 6;
let findIndex;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue && arr.includes(searchValue)) {
        findIndex = i;
        break;
    }
}

console.log(findIndex, 'Find Index');