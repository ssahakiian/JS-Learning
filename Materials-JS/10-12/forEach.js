// Find Maximum Value in Array Using Custom forEach Function

const number = [1, 2, 4, 5];

let max  = number[0];
function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            continue
        }
        callback(arr[i], i);
    }
}

forEach(number, function(item, index) {
    if (item > max) {
        max = item;
    }
});

console.log(max);