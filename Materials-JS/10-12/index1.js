const boo = x => x + x; // => arrow function with ONE argument, no need for ()

console.log(boo(20));

//

const foo = (x, y) => { // with MORE than one arguments () is needed
    return x + y
}
console.log(foo(20, 30));
