import { createCanvas, loadImage } from "canvas";
import { Pokemon } from "./pokemon.type";

const serebiiUrl = (pokedexNumber: number) =>
  `https://www.serebii.net/pokearth/sprites/rb/${pokedexNumber
    .toString()
    .padStart(3, "0")}.png`;

export const generatePartyImage = async (pokemon: Pokemon[]) => {
  const canvas = createCanvas(360, 80);
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  ctx.fillStyle = "#ffffff60";
  ctx.fillRect(0, 0, 360, 80);

  const pokemonUrls = pokemon.map((mon) => serebiiUrl(mon.pokedexNumber));
  const images = await Promise.all(pokemonUrls.map(loadImage));
  images.forEach((img, i) => ctx.drawImage(img, i * 60, 0));

  ctx.font = '16px "PKMN RBYGSC"';
  ctx.fillStyle = "#000";
  pokemon.forEach(({ level }, i) =>
    ctx.fillText(`lv${level}`, i * 60 + 15, 70, 30)
  );

  return canvas;
};
