// Problem 1: Student Grades
// You are provided with an array of students, where each student is represented as an object. 
// Each object contains the student’s name and their score. 
// Your task is to determine the grade status of each student using a for loop and a switch statement.

const students = [
    { name: "Anna", grade: 85 },
    { name: "Mariam", grade: 92 },
    { name: "Olivia", grade: 76 },
    { name: "Emma", grade: 59 },
  ];

for (let i = 0; i < students.length; i++) {
    const score = students[i]
    let result;
    switch (true) {
        case(score.grade >= 90): result = 'Excellent' ;break;
        case(score.grade >= 75): result = 'Good';break;
        case(score.grade >= 50): result = 'Pass';break;
        default: result = 'Fail';break;
    }

    console.log(`${score.name}'s score is ${score.grade}: ${result}`);
}

