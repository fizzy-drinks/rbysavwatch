import path from "path";
import fs from "fs";
import { extractSaveData, fullReport, generatePartyImage } from "../src";

const fileName = process.argv[2];
if (!fileName) {
  console.error("Please provide the path to a savefile.");
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), fileName);
const buf = fs.readFileSync(filePath);

const { pokedex, pokemon } = extractSaveData(buf);

generatePartyImage(pokemon).then((canvas) => {
  fs.writeFileSync(path.join(__dirname, "test.png"), canvas.toBuffer());
  console.log("Generated image at test dir");
});

console.log(fullReport(pokedex, pokemon));
