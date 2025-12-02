import fs from "fs";

export default () => {
  let data = fs.readFileSync("2025/1/in.txt", "utf8").split("\n");
  let counter = 50;
  let zeros = 0;

  data.forEach((i, j) => {
    data[j] = parseInt(i.replace("R", "").replace("L", "-"));
  });

  data.forEach((i) => {
    for (let j = 0; j < Math.abs(i); j++) {
      if (Math.sign(i) == -1) {
        counter -= 1;
      } else {
        counter += 1;
      }
      if (counter < 0) {
        counter = 99;
      }
      if (counter > 99) {
        counter = 0;
      }
      if (counter == 0) {
        zeros += 1;
      }
    }
  });

  return zeros;
};
