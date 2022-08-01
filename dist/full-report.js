"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullReport = void 0;
const pokemon_to_text_1 = require("./pokemon-to-text");
const fullReport = (pokedex, pokemon) => `Catch'Em All

Capturados: ${pokedex.owned}/150

Party
${(0, pokemon_to_text_1.pokemonToText)(pokemon)}`;
exports.fullReport = fullReport;
