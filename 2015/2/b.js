import fs from "fs";

export default () => {
  const data = fs
    .readFileSync("2015/2/in.txt", "utf8")
    .split("\n")
    .map((i) => i.split("x").map((j) => parseInt(j)));

  let out = 0;
  let testing = [];

  data.forEach((i) => {
    let s = [
      Math.min(...i),
      Math.min(...i.filter((_, j) => j !== i.indexOf(Math.min(...i)))),
    ];
    out += s[0] * 2 + s[1] * 2 + i[0] * i[1] * i[2];
  });

  // console.log(testing);
  return out;
};
