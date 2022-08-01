import { Pokedex } from "./pokedex.type";
import { pokemonIndexMap } from "./pokemon-index-map";
import { Pokemon } from "./pokemon.type";

const extractPokemonData = (saveData: Buffer): Pokemon[] => {
  const PartyDataAddr = 0x2f2c;
  const PartyDataLength = 0x194;
  const PokemonDataLength = 44;

  const partyData: Int8Array = Int8Array.prototype.slice.call(
    saveData,
    PartyDataAddr,
    PartyDataAddr + PartyDataLength
  );
  const partyDataArr = Array.from(partyData);

  const pokemonCount = partyDataArr.shift();
  console.log("Pokémon in party:", pokemonCount);

  const pokemonSpecies = partyDataArr.splice(0, 6);
  console.log(
    "Species:",
    pokemonSpecies.map(
      (id) => pokemonIndexMap.find((mon) => mon[0] === id)?.[1]
    )
  );

  partyDataArr.shift(); // throw away padding data

  const pokemonData: number[][] = [];
  while (partyDataArr.length)
    pokemonData.push(partyDataArr.splice(0, PokemonDataLength));

  const readAsInt16 = (bytes: number[]) => (bytes[0] << 0xff) + bytes[1];

  return pokemonData
    .map((bytes) => {
      const speciesId = bytes.shift() || 0;
      const [name, pokedexNumber] = (pokemonIndexMap
        .find(([id]) => id === speciesId)
        ?.slice(1) as [string, number]) || ["none", 0];

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

const extractPokedexData = (saveData: Buffer): Pokedex => {
  const OwnedAddr = 0x25a3;
  const OwnedLength = 0x13;

  const ownedData: Int8Array = Int8Array.prototype.slice.call(
    saveData,
    OwnedAddr,
    OwnedAddr + OwnedLength
  );

  const countByteFlags = (n: number) =>
    [
      0b1, 0b10, 0b100, 0b1000, 0b1_0000, 0b10_0000, 0b100_0000, 0b1000_0000,
    ].reduce((count, bit) => (bit & n ? 1 + count : count), 0);

  const owned = ownedData.reduce(
    (count, int8) => countByteFlags(int8) + count,
    0
  );

  return {
    owned,
  };
};

export const extractSaveData = (saveData: Buffer) => {
  const pokemon = extractPokemonData(saveData);
  const pokedex = extractPokedexData(saveData);

  return { pokedex, pokemon };
};
