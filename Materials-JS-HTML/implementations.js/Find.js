Array.prototype.customFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined
};

// Example
const numbers = [5, 10, 15, 20];
const findNumber = numbers.customFind(function(num) {
    return num > 10
});

console.log(findNumber); //15
