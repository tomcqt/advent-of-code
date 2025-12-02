const fs = require("fs");

let numbers = fs.readFileSync("day2.txt", "utf8").split(",");
numbers.forEach((i, j) => {
  numbers[j] = i.split("-").map((i) => parseInt(i));
});

console.log(numbers);

let counter = 0;
let total = 0;
let cString, cLength;

numbers.forEach((line) => {
  counter = line[0];
  while (counter < line[1] + 1) {
    cString = counter.toString();
    cLength = counter.toString().length;
    if (cString.slice(cLength / 2, cLength) == cString.slice(0, cLength / 2)) {
      total += counter;
    }
    counter += 1;
  }
});

console.log(total);
