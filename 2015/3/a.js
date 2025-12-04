import fs from "fs";

export default () => {
  const data = fs.readFileSync("2015/3/in.txt", "utf8").split("");

  let previous = new Set();
  let position = [0, 0];

  previous.add(0);

  data.forEach((item) => {
    if (item == ">") {
      position[0] += 1;
    } else if (item == "<") {
      position[0] -= 1;
    } else if (item == "^") {
      position[1] += 1;
    } else if (item == "v") {
      position[1] -= 1;
    }
    previous.add(position[0] * 25565 + position[1]);
  });

  return previous.size;
};
