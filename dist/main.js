#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const _1 = require(".");
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
const filePath = path_1.default.resolve(process.cwd(), fileName);
const destPath = path_1.default.resolve(process.cwd(), txtDest);
const writeData = async () => {
    const buf = fs_1.default.readFileSync(filePath);
    const { pokedex, pokemon } = (0, _1.extractSaveData)(buf);
    fs_1.default.writeFileSync(destPath, (0, _1.fullReport)(pokedex));
    const img = await (0, _1.generatePartyImage)(pokemon);
    fs_1.default.writeFileSync(destPath + ".png", img.toBuffer());
};
fs_1.default.watchFile(filePath, writeData);
writeData();
