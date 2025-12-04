import fs from "fs";

export default () => {
  const data = fs
    .readFileSync("2015/5/in.txt", "utf8")
    .split("\n")
    .map((i) => i.split(""));

  let nice = 0;

  data.forEach((line) => {
    let vowelCounter = 0,
      hasDouble = false,
      isNaughty = false;
    line.forEach((char, index) => {
      if ("aeiou".split("").includes(char)) {
        vowelCounter += 1;
      }
      if (char == line[index + 1]) {
        hasDouble = true;
      }
      if (["ab", "cd", "pq", "xy"].includes(char + line[index + 1])) {
        isNaughty = true;
      }
    });
    if (vowelCounter >= 3 && hasDouble && !isNaughty) {
      nice += 1;
    }
  });

  return nice;
};
