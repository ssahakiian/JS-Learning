//homework1

let n = 5

for (let i = 1; i <= 10; i++) {
    console.log(i * n);
}

//homework2

let sentence = "I am learning JavaScript";
let result = ""

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
        result += "-"
    } else {
        result += sentence[i]; 
       }
}

console.log(result);

