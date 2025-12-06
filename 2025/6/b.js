import fs from "fs";

export default () => {
  let data = fs
    .readFileSync("2025/6/in.txt", "utf-8")
    .split("\n")
    .map((i) => i.split(""));

  let numberSizes = [];
  let counter = 1;
  data
    .slice(-1)[0]
    .reverse()
    .forEach((char) => {
      if (char === "+" || char === "*") {
        numberSizes.push(counter);
        counter = 0;
      } else {
        counter++;
      }
    });

  numberSizes = numberSizes.reverse();

  let numbers = [];
  let currentIndex = 0;
  numberSizes.forEach((size) => {
    let line = ["", ""];
    data
      .slice(0, -1)
      .map((line) => line.slice(currentIndex, currentIndex + size))
      .forEach((numArr) => {
        numArr.forEach((n, i) => (line[i] += n));
      });
    line = line.map((l) => parseInt(l.trim().replace("undefined", "")));
    numbers.push(line);
    currentIndex += size + 1;
  });

  const operators = data
    .map((i) => i.join("").trim())
    .slice(-1)[0]
    .replaceAll(/\s+/g, ",")
    .split(",")
    .reverse();

  let result = 0;

  operators.forEach((op, index) => {
    const workingNumbers = numbers[index].reverse();
    if (op == "+") {
      result += workingNumbers.reduce((a, b) => a + b, 0);
    } else if (op == "*") {
      result += workingNumbers.reduce((a, b) => a * b, 1);
    }
  });

  return result;
};
