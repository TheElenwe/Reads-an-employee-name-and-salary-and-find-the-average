let readlineSync = require("readline-sync");
sum = 0;
for (employee = 0; employee < 10; employee++) {
  let employee = readlineSync.question("Input employee name: ");
  if (employee === "quit") {
    break;
  }
  salary = Number(readlineSync.question("Input employee salary: "));
  sum += salary;
}
avg = sum / 4;
console.log(` the total amount of salaries is ${avg}$`);
while (true) {
  salary = String(readlineSync.question("give numbers "));
  if (salary === "quit") {
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
