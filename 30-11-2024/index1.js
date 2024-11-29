//Print a right-aligned triangle of asterisks (*), where the number of asterisks 
//increases by one per line, starting from 1 up to 10.


const n = 10;

for (let i = 1; i <= n; i++) {
     let asterisks = '*'.repeat(i);
    console.log(asterisks);
}
