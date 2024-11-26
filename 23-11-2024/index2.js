//Write a for loop to replace all spaces in a string with hyphens (-).

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