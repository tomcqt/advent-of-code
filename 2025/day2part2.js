const fs = require("fs");

let numbers = fs.readFileSync("day2.txt", "utf8").split(",");
numbers.forEach((i, j) => {
  numbers[j] = i.split("-").map((i) => parseInt(i));
});

console.log(numbers);

let counter = 0;
let total = 0;
let cString, cLength;
let valid = [];

numbers.forEach((line) => {
  counter = line[0];
  while (counter < line[1] + 1) {
    cString = counter.toString();
    cLength = counter.toString().length;
    for (let i = 0; i < cLength - 1; i++) {
      rString = cString.slice(0, i + 1).repeat(cLength / (i + 1));
      if (rString == cString) {
        total += counter;
        valid.push(counter);
        break;
      }
    }
    counter++;
  }
});

console.log(valid);
console.log(total);
console.log(4174379265);
