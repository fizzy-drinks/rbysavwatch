import { Pokedex } from "./pokedex.type";

export const fullReport = (pokedex: Pokedex) => `Catch'Em All

Capturados: ${pokedex.owned}/150`;
