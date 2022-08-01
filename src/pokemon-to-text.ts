import { Pokemon } from "./pokemon.type";

export const pokemonToText = (pokemon: Pokemon[]) =>
  pokemon.map(({ name, level }) => `${name} lv${level}`).join("\n");
