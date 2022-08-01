"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonToText = void 0;
const pokemonToText = (pokemon) => pokemon.map(({ name, level }) => `${name} lv${level}`).join("\n");
exports.pokemonToText = pokemonToText;
