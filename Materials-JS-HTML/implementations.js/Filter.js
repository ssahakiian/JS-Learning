const resultArray = [];

Array.prototype.customFilter = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
        resultArray.push(this[i]);
    }
}
    return resultArray;

};

//Example:

const arr = ['JavaScript', 'Python', 'HTML', 'CSS']; 
const longValue = arr.customFilter(function(word) {
    return word.length > 5;
});

console.log(longValue);