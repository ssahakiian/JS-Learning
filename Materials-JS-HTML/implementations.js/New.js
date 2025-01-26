// implementation of New

function Animal(weight, color, type) {
    this.weight = weight;
    this.color = color;
    this.type = type;
}

Animal.prototype.run = function(speed) {
    return `The ${this.type} runs at ${speed} speed`
}


function customNew(Constructor, weight, color, type) {
    const emptyObject = Object.create(Constructor.prototype)
    return emptyObject;
}

const dog = customNew(Animal, '50kg', 'black', 'dog')

console.log(dog.run());

////