import fs from "fs";

export default () => {
  const blocks = fs.readFileSync("2025/5/in.txt", "utf8").split("\n\n");

  const lines = blocks[0]
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const ranges = [];

  for (const line of lines) {
    if (line.includes("-")) {
      const [a, b] = line.split("-").map((x) => Number(x));
      if (Number.isFinite(a) && Number.isFinite(b)) {
        ranges.push([a, b]);
      }
    } else {
      const n = Number(line);
      if (Number.isFinite(n)) {
        ranges.push([n, n]);
      }
    }
  }

  ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [curStart, curEnd] = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    const [s, e] = ranges[i];

    if (s <= curEnd + 1) {
      curEnd = Math.max(curEnd, e);
    } else {
      merged.push([curStart, curEnd]);
      curStart = s;
      curEnd = e;
    }
  }

  merged.push([curStart, curEnd]);

  let total = 0;
  for (const [s, e] of merged) {
    total += e - s + 1;
  }

  return total;
};
