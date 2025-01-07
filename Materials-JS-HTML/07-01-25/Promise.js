console.log('script start');
// async
const promise = new Promise((resolve, reject) => {
    resolve('resolve value');
});

promise
.then((resp) => {
    console.log(resp);
})
.catch((error) => {
    console.log(error, '>>>');
})

// async
console.log('script end');

//Log --> script start, script end, resolve value
//Because Promise is asyncrone method