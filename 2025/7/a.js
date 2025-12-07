import fs from "fs";

export default () => {
  const data = fs
    .readFileSync("2025/7/in.txt", "utf8")
    .split("\n")
    .map((i) => i.split(""));

  let startIndex = -1;

  data.slice(0)[0].forEach((item, index) => {
    if (item == "S") {
      startIndex = index;
    }
  });

  let beamIndexes = new Set([startIndex]);
  let splitCount = 0;

  data.forEach((row) => {
    beamIndexes.forEach((index) => {
      if (row[index] == "^") {
        beamIndexes.add(index - 1);
        beamIndexes.add(index + 1);
        beamIndexes.delete(index);
        splitCount++;
      }
    });
  });

  return splitCount;
};
