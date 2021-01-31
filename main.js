const readlineSync = require("readline-sync");
let sum = 0;
for (employee = 0; employee <4; employee++) {
  const employee = readlineSync.question("Input employee name: ");
  salary = Number(readlineSync.question("Input employee salary: "));
  sum += salary;
}
avg = sum / 4;
console.log(` the total amount of salaries is ${avg}$`);
while(true) {
  salary = String(readlineSync.question("Input employee salary Again!!...if is above or below average salary "));
  if(salary === "quit"){
    break;
  }
  if (salary > avg) {
    console.log("salary is above average ");
    employee--;
  } else {
    console.log("salary is bellow average ");
  }
}
console.log(`Total Employees: ${employee}`);
