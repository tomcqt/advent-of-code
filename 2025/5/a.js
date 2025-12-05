import fs from "fs";

export default () => {
  const data = fs
    .readFileSync("2025/5/in.txt", "utf8")
    .split("\n\n")
    .map((i) => i.trim().split("\n"));

  const ranges = data[0].map((i) => i.split("-").map((j) => parseInt(j)));
  const digits = data[1].map((i) => parseInt(i));

  let valid = new Set();

  ranges.forEach((range) => {
    digits.forEach((digit) => {
      if (digit >= range[0] && digit <= range[1]) {
        valid.add(digit);
      }
    });
  });

  return valid.size;
};
