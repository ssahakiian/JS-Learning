export function find(array, callback) {
    let findValue = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) continue;
        if (callback(array[i], i, array)) {
            findValue = array[i]
        }
    }
    return findValue;
}