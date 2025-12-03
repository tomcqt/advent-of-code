import fs from "fs";

export default () => {
  const data = fs.readFileSync("2015/1/in.txt", "utf8").split("");

  let out = 0;

  data.forEach((i) => {
    if (i == "(") {
      out++;
    } else if (i == ")") {
      out--;
    }
  });

  return out;
};
