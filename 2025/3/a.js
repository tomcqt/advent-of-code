import fs from "fs";

export default () => {
  const data = fs
    .readFileSync("2025/3/in.txt", "utf8")
    .split("\n")
    .map((i) => i.split("").map((j) => parseInt(j)));

  let out = 0;

  data.forEach((line) => {
    let bestNum = 0;
    let bn0 = 0,
      bn1 = 0;
    line.slice(0, -1).forEach((number, index) => {
      if (number > bn0) {
        bn0 = number;
        bn1 = index;
      }
    });
    bestNum += bn0 * 10;
    bn0 = 0;
    line.slice(bn1 + 1).forEach((number) => {
      if (number > bn0) {
        bn0 = number;
      }
    });
    bestNum += bn0;
    out += bestNum;
  });

  return out;
};
