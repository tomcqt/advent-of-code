import fs from "fs";

export default () => {
  const data = fs
    .readFileSync("2025/3/in.txt", "utf8")
    .trim()
    .split("\n")
    .map((i) => i.split("").map((j) => parseInt(j)));
  let out = 0;

  data.forEach((line) => {
    let chosen = [];
    let startIndex = 0;

    for (let k = 0; k < 12; k++) {
      let bestDigit = -1;
      let bestIndex = startIndex;

      const maxStart = line.length - (12 - k);

      for (let i = startIndex; i <= maxStart; i++) {
        if (line[i] > bestDigit) {
          bestDigit = line[i];
          bestIndex = i;
        }
      }

      chosen.push(bestDigit);
      startIndex = bestIndex + 1;
    }

    let numStr = chosen.join("");
    let value = parseInt(numStr);

    out += value;
  });

  return out;
};
