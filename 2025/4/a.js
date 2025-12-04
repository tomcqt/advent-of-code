import fs from "fs";

export default () => {
  const data = fs
    .readFileSync("2025/4/in.txt", "utf8")
    .split("\n")
    .map((i) => i.split(""));

  let accessable = 0;

  data.forEach((l, y) => {
    l.forEach((i, x) => {
      if (i == ".") {
        return;
      }

      let rollCounter = 0;

      const rows = data.length;
      const cols = l.length;

      if (y + 1 < rows) {
        if (x + 1 < cols && data[y + 1][x + 1] == "@") rollCounter++;
        if (data[y + 1][x] == "@") rollCounter++;
        if (x - 1 >= 0 && data[y + 1][x - 1] == "@") rollCounter++;
      }

      if (x + 1 < cols && data[y][x + 1] == "@") rollCounter++;
      if (x - 1 >= 0 && data[y][x - 1] == "@") rollCounter++;

      if (y - 1 >= 0) {
        if (x + 1 < cols && data[y - 1][x + 1] == "@") rollCounter++;
        if (data[y - 1][x] == "@") rollCounter++;
        if (x - 1 >= 0 && data[y - 1][x - 1] == "@") rollCounter++;
      }

      if (rollCounter < 4) {
        accessable++;
      }
    });
  });

  return accessable;
};
