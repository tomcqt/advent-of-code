import fs from "fs";

export default () => {
  const data = fs.readFileSync("2015/3/in.txt", "utf8").split("");

  let previous = new Set();
  let positionA = [0, 0];
  let positionB = [0, 0];

  previous.add(0);

  data.forEach((item, index) => {
    if (index % 2 == 0) {
      if (item == ">") {
        positionA[0] += 1;
      } else if (item == "<") {
        positionA[0] -= 1;
      } else if (item == "^") {
        positionA[1] += 1;
      } else if (item == "v") {
        positionA[1] -= 1;
      }
      previous.add(positionA[0] * 25565 + positionA[1]);
    } else {
      if (item == ">") {
        positionB[0] += 1;
      } else if (item == "<") {
        positionB[0] -= 1;
      } else if (item == "^") {
        positionB[1] += 1;
      } else if (item == "v") {
        positionB[1] -= 1;
      }
      previous.add(positionB[0] * 25565 + positionB[1]);
    }
  });

  return previous.size;
};
