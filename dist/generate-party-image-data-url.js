"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePartyImage = void 0;
const canvas_1 = require("canvas");
const serebiiUrl = (pokedexNumber) => `https://www.serebii.net/pokearth/sprites/rb/${pokedexNumber
    .toString()
    .padStart(3, "0")}.png`;
const generatePartyImage = async (pokemon) => {
    const canvas = (0, canvas_1.createCanvas)(360, 80);
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "#ffffff60";
    ctx.fillRect(0, 0, 360, 80);
    const pokemonUrls = pokemon.map((mon) => serebiiUrl(mon.pokedexNumber));
    const images = await Promise.all(pokemonUrls.map(canvas_1.loadImage));
    images.forEach((img, i) => ctx.drawImage(img, i * 60, 0));
    ctx.font = '16px "PKMN RBYGSC"';
    ctx.fillStyle = "#000";
    pokemon.forEach(({ level }, i) => ctx.fillText(`lv${level}`, i * 60 + 15, 70, 30));
    return canvas;
};
exports.generatePartyImage = generatePartyImage;
