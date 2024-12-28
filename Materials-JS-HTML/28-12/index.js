const button = document.getElementById('click_me_button');
const loadingElement = document.getElementById('loading');
const succesMessage = document.getElementById('success');
const errorMessage = document.getElementById('error');

function greenCardAction(resolve, reject) {
    loadingElement.innerText = '';
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 5) {
        resolve('Welcome')
    } else {
        reject('Try again');
    }
}

function bookHotel(hotelID) {
    alert('Book Hotel');
}

function resolveAction(response) {
    succesMessage.innerText = response;
    setTimeout(bookHotel, 2000)
}

function rejectAction(error) {
    errorMessage.innerText = error;
}

button.addEventListener('click', () => {
    loadingElement.innerText = 'Loading...';
    succesMessage.innerText = '';
    errorMessage.innerText = ''; 
    setTimeout(() => {
        greenCardAction(resolveAction, rejectAction)
    }, 3000)
})


//Promise syntax

const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if (randomNumber > 5) {
            resolve('Welcome')
        } else {
            reject('Try again');
        }
    }, 3000);
})

console.log(promise, '>>>');
promise
.then ((response) => {
    console.log(response);
})
.then (() => {

})
.then (() => {

})
.catch((error) => {
    console.log(error)
})