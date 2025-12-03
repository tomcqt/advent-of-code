import fs from "fs";

export default () => {
  const data = fs
    .readFileSync("2015/2/in.txt", "utf8")
    .split("\n")
    .map((i) => i.split("x").map((j) => parseInt(j)));

  let out = 0;

  data.forEach((i) => {
    let l = i[0],
      w = i[1],
      h = i[2];
    let nums = [2 * l * w, 2 * w * h, 2 * h * l];
    let product =
      nums.reduce((o, i) => o + i) + Math.floor(Math.min(...nums) / 2);
    out += product;
  });

  return out;
};
