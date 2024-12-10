// Function to Find the Maximum Number in an Array

const arr = [1, 2, 4, 5, 18];

function findMaxNumber(array) {
    let max  = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) {
        continue
        }

    if (array[i] > max) {
        max  = array[i];
    }
}
return max;
}

console.log(findMaxNumber(arr));