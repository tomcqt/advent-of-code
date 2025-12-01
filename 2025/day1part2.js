const fs = require("fs");

let data = fs.readFileSync("day1.txt", "utf8").split("\n");
let counter = 50;
let zeros = 0;

data.forEach((i, j) => {
  data[j] = parseInt(i.replace("R", "").replace("L", "-"));
});

data.forEach((i) => {
  for (let j = 0; j < Math.abs(i); j++) {
    if (Math.sign(i) == -1) {
      counter -= 1;
    } else {
      counter += 1;
    }
    if (counter < 0) {
      counter = 99;
    }
    if (counter > 99) {
      counter = 0;
    }
    if (counter == 0) {
      zeros += 1;
    }
  }
});

console.log(zeros);
