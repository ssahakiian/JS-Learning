Array.prototype.customIndexOf = function(searchElement, fromIndex = 0) {

    if (fromIndex < 0) {
        fromIndex = Math.max(0, this.length + fromIndex);
    }

    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i;
        }
    }

    return -1; 
};

//Example
const numbers = [1, 2, 3, 4, 5, 6];
const index = numbers.customIndexOf(3);

console.log(index); // 2
