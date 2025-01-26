Array.prototype.customIncludes = function(searchElement, fromIndex = 0) {

    if(fromIndex < 0) {
        fromIndex = Math.max(0, this.length + fromIndex);
    }
    
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
            return true;
        }

    }
    return false;
}

// Example:
const numbers = [18, 21, 31, 14, 25];
const containsNum = numbers.customIncludes(21);

console.log(containsNum);//true