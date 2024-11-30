import { CARS, CAR_MAX_SPEED } from './cars.js';
import { STUDENTS } from './students.js';

const safeCars = [];
const speedingCars = [];

for (let i = 0; i < CARS.length; i++) {
    let item = CARS[i];
    if (item.speed <= CAR_MAX_SPEED) {
        safeCars.push(item);
} else {
    speedingCars.push(item);
    }
}

console.log('Safe Cars', safeCars);
console.log('Speeding Cars', speedingCars);
