import fs from "fs";

export default () => {
  const data = fs
    .readFileSync("2025/6/in.txt", "utf-8")
    .split("\n")
    .map((i) =>
      i
        .trim()
        .replaceAll(/\s+/g, ",")
        .split(",")
        .map((i) => (isNaN(parseInt(i)) ? i : parseInt(i)))
    );

  const numbers = data.slice(0, -1);
  const operators = data.slice(-1)[0];

  let result = 0;

  operators.forEach((op, index) => {
    const workingNumbers = numbers.map((n) => n[index]);
    if (op == "+") {
      result += workingNumbers.reduce((a, b) => a + b, 0);
    } else if (op == "*") {
      result += workingNumbers.reduce((a, b) => a * b, 1);
    }
  });

  return result;
};
