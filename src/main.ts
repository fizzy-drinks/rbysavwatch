#!/usr/bin/env node

import path from "path";
import fs from "fs";
import { fullReport, extractSaveData, generatePartyImage } from ".";

const fileName = process.argv[2];
if (!fileName) {
  console.error("Please provide the path to a savefile.");
  process.exit(1);
}

const txtDest = process.argv[3];
if (!txtDest) {
  console.error("Please provide a destination file.");
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), fileName);
const destPath = path.resolve(process.cwd(), txtDest);

const writeData = async () => {
  const buf = fs.readFileSync(filePath);

  const { pokedex, pokemon } = extractSaveData(buf);

  fs.writeFileSync(destPath, fullReport(pokedex));

  const img = await generatePartyImage(pokemon);
  fs.writeFileSync(destPath + ".png", img.toBuffer());
};

fs.watchFile(filePath, writeData);
writeData();
