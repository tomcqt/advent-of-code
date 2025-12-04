import fs from "fs";
import crypto from "crypto";

export default () => {
  const key = fs.readFileSync("2015/4/in.txt");

  let i = 0;

  while (true) {
    const hashed = crypto
      .createHash("md5")
      .update(key + i.toString())
      .digest("hex");
    if (hashed.slice(0, 5) == "00000") {
      break;
    }
    i++;
  }

  return i;
};
