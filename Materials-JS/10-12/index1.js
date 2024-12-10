// const boo = x => x + x; // => arrow function with ONE argument, no need for ()

// console.log(boo(20));

// //

// const foo = (x, y) => { // with MORE than one arguments () is needed
//     return x + y
// }

// console.log(foo(20, 30));

// //


// function buyTicket() {
//     console.log('ticket price $1000');
// }


// function bookHotel (hotelName, foo) {
//     if (hotelName === 'x') {
//         foo 
//     }

// }
// bookHotel('x', buyTicket);

// const arr = [1, 2, 4, 5];

// let max  = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === undefined)
//         continue
// }

// if (arr[i] > maxx) {
//     max  = arr[i];
// }




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
