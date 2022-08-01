import { Pokedex } from "./pokedex.type";
import { pokemonToText } from "./pokemon-to-text";
import { Pokemon } from "./pokemon.type";

export const fullReport = (
  pokedex: Pokedex,
  pokemon: Pokemon[]
) => `Catch'Em All

Capturados: ${pokedex.owned}/150

Party
${pokemonToText(pokemon)}`;
