//Event Loop

console.log('script start');

setTimeout(function () {
    console.log('code 3000')
}, 3000);

console.log('script 2');

setTimeout(function () {
    console.log('code 2000')
}, 2000);

console.log('script end');