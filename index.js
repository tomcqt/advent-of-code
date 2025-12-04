import { performance } from "node:perf_hooks";
import path from "node:path";
import process from "node:process";
import fs from "fs";

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value] = arg.replace(/^--/, "").split("=");
    return [key, value];
  })
);

const year = args.year;
const day = args.day;

if (!year || !day) {
  console.log();
  console.log("tomcat's Advent of Code");
  console.error("Usage: node index.js --year=YYYY --day=DD");
  process.exit(1);
}

const basePath = `./${year}/${day}`;

async function runPart(part) {
  const filePath = path.resolve(`${basePath}/${part}.js`);

  try {
    const mod = await import(filePath);
    if (typeof mod.default !== "function") {
      console.error(`✖ ${part}.js does not export a default function`);
      return;
    }

    const start = performance.now();
    const result = await mod.default();
    const end = performance.now();

    console.log(`Part ${part.toUpperCase()}:`, result);
    console.log(`Time: ${(end - start).toFixed(3)} ms\n`);
  } catch (err) {
    console.error(`Error running ${part}.js:`);
    console.error(err);
  }
}

console.log();
console.log("tomcat's Advent of Code");
console.log(`Running AoC ${year}, Day ${day}\n`);

if (!fs.existsSync(args.year)) {
  console.error(`Year ${args.year} has not been solved yet!`);
  process.exit(1);
}

if (!fs.existsSync(args.year + "/" + args.day)) {
  console.error(`Day ${args.day} for ${args.year} has not been solved yet!`);
  process.exit(1);
}

await runPart("a");
await runPart("b");
