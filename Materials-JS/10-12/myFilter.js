// Function to Filter Array Elements Greater Than 3: Filter method implementation

const number = [1, 2, 4, 5];

function myFilter(arr, callback) {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
         if (arr[i] === undefined) {
            continue
         }
    if (callback(arr[i], i)) {
        resultArray.push(arr[i])
    }
}
return resultArray;
}


const result = myFilter(number, function (item, index) {
    return item > 3;
});

console.log(result);
