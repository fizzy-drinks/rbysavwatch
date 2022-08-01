"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractSaveData = void 0;
const pokemon_index_map_1 = require("./pokemon-index-map");
const extractPokemonData = (saveData) => {
    const PartyDataAddr = 0x2f2c;
    const PartyDataLength = 0x194;
    const PokemonDataLength = 44;
    const partyData = Int8Array.prototype.slice.call(saveData, PartyDataAddr, PartyDataAddr + PartyDataLength);
    const partyDataArr = Array.from(partyData);
    const pokemonCount = partyDataArr.shift();
    console.log("Pokémon in party:", pokemonCount);
    const pokemonSpecies = partyDataArr.splice(0, 6);
    console.log("Species:", pokemonSpecies.map((id) => pokemon_index_map_1.pokemonIndexMap.find((mon) => mon[0] === id)?.[1]));
    partyDataArr.shift(); // throw away padding data
    const pokemonData = [];
    while (partyDataArr.length)
        pokemonData.push(partyDataArr.splice(0, PokemonDataLength));
    const readAsInt16 = (bytes) => (bytes[0] << 0xff) + bytes[1];
    return pokemonData
        .map((bytes) => {
        const speciesId = bytes.shift() || 0;
        const [name, pokedexNumber] = pokemon_index_map_1.pokemonIndexMap
            .find(([id]) => id === speciesId)
            ?.slice(1) || ["none", 0];
        const currentHP = readAsInt16(bytes.splice(0, 2));
        const _level = bytes.shift() || 5;
        const _status = bytes.shift() || 0;
        const _types = bytes.splice(0, 2);
        const _catchrate = bytes.shift();
        const _moves = bytes.splice(0, 4);
        const _trainerIdBytes = bytes.splice(0, 2);
        const _exp = bytes.splice(0, 3);
        const _evs = bytes.splice(0, 10);
        const _ivs = bytes.splice(0, 2);
        const _pp = bytes.splice(0, 4);
        const level = bytes.shift() || 0;
        const maxHP = readAsInt16(bytes.splice(0, 2));
        // const attack = readAsInt16(bytes.splice(0, 2));
        // const defense = readAsInt16(bytes.splice(0, 2));
        // const speed = readAsInt16(bytes.splice(0, 2));
        // const special = readAsInt16(bytes.splice(0, 2));
        return {
            speciesId,
            pokedexNumber,
            name,
            currentHP,
            maxHP,
            level,
        };
    })
        .slice(0, pokemonCount);
};
const extractPokedexData = (saveData) => {
    const OwnedAddr = 0x25a3;
    const OwnedLength = 0x13;
    const ownedData = Int8Array.prototype.slice.call(saveData, OwnedAddr, OwnedAddr + OwnedLength);
    const countByteFlags = (n) => [
        0b1, 0b10, 0b100, 0b1000, 16, 32, 64, 128,
    ].reduce((count, bit) => (bit & n ? 1 + count : count), 0);
    const owned = ownedData.reduce((count, int8) => countByteFlags(int8) + count, 0);
    return {
        owned,
    };
};
const extractSaveData = (saveData) => {
    const pokemon = extractPokemonData(saveData);
    const pokedex = extractPokedexData(saveData);
    return { pokedex, pokemon };
};
exports.extractSaveData = extractSaveData;
