import path from "path";
import fs from "fs";
import { extractSaveData, fullReport } from "../src";

const fileName = process.argv[2];
if (!fileName) {
  console.error("Please provide the path to a savefile.");
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), fileName);
const buf = fs.readFileSync(filePath);

const { pokedex, pokemon } = extractSaveData(buf);

console.log(fullReport(pokedex, pokemon));
