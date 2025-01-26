const resultArray = [];

Array.prototype.customMap = function(callback) {
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }
    
    return resultArray;
};

// Example
const numbers = [1, 2, 3, 4];
const doubled = numbers.customMap(function(num) {
    return num * 2;
});

console.log(doubled); //[2, 4, 6, 8]