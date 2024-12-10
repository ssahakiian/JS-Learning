// Map method implementation

const number = [1, 2, 4, 5];

function myMap(arr, callback) {
    const resultArray = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined){
            continue;
        }
        resultArray.push(callback(arr[i], i));
    }
    return resultArray;
}

const result = myMap(number, function (item) {
    return item + 5;
});

console.log(result);

