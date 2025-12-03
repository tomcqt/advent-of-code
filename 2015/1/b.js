import fs from "fs";

export default () => {
  const data = fs.readFileSync("2015/1/in.txt", "utf8").split("");

  let out = 0;

  for (const [j, i] of data.entries()) {
    if (i == "(") {
      out++;
    }
    if (i == ")") {
      out--;
    }
    if (out < 0) {
      return j + 1;
    }
  }
};
