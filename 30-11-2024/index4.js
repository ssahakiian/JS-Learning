// Problem 3: Employee Departments
// You are given an array of employees, where each employee has a name and a department. 
// Your task is to determine how many employees work in each department.

const employees = [
    { name: "Karen", department: "HR" },
    { name: "John", department: "IT" },
    { name: "Margarita", department: "HR" },
    { name: "Aram", department: "Finance" },
    { name: "Nina", department: "IT" }
];

const departmentCount = {};


for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];
    let dep = emp.department;

        if (!departmentCount[dep]) {
            departmentCount[dep] = 0;
        }
       departmentCount[dep]++;
}

console.log(departmentCount);