import fs from "fs";

export default () => {
  let numbers = fs.readFileSync("2025/2/in.txt", "utf8").split(",");
  numbers.forEach((i, j) => {
    numbers[j] = i.split("-").map((i) => parseInt(i));
  });

  let counter = 0;
  let total = 0;
  let cString, cLength, rString;

  numbers.forEach((line) => {
    counter = line[0];
    while (counter < line[1] + 1) {
      cString = counter.toString();
      cLength = counter.toString().length;
      for (let i = 0; i < cLength - 1; i++) {
        rString = cString.slice(0, i + 1).repeat(cLength / (i + 1));
        if (rString == cString) {
          total += counter;
          break;
        }
      }
      counter++;
    }
  });

  return total;
};
