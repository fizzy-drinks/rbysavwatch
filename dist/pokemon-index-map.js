"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonIndexMap = void 0;
const pokedex_1 = require("./data/pokedex");
const pokemonByIndex = [
    [1, "Rhydon"],
    [2, "Kangaskhan"],
    [3, "Nidoran♂"],
    [4, "Clefairy"],
    [5, "Spearow"],
    [6, "Voltorb"],
    [7, "Nidoking"],
    [8, "Slowbro"],
    [9, "Ivysaur"],
    [10, "Exeggutor"],
    [11, "Lickitung"],
    [12, "Exeggcute"],
    [13, "Grimer"],
    [14, "Gengar"],
    [15, "Nidoran♀"],
    [16, "Nidoqueen"],
    [17, "Cubone"],
    [18, "Rhyhorn"],
    [19, "Lapras"],
    [20, "Arcanine"],
    [21, "Mew"],
    [22, "Gyarados"],
    [23, "Shellder"],
    [24, "Tentacool"],
    [25, "Gastly"],
    [26, "Scyther"],
    [27, "Staryu"],
    [28, "Blastoise"],
    [29, "Pinsir"],
    [30, "Tangela"],
    [31, "MissingNo. (Scizor)"],
    [32, "MissingNo. (Shuckle)"],
    [33, "Growlithe"],
    [34, "Onix"],
    [35, "Fearow"],
    [36, "Pidgey"],
    [37, "Slowpoke"],
    [38, "Kadabra"],
    [39, "Graveler"],
    [40, "Chansey"],
    [41, "Machoke"],
    [42, "Mr. Mime"],
    [43, "Hitmonlee"],
    [44, "Hitmonchan"],
    [45, "Arbok"],
    [46, "Parasect"],
    [47, "Psyduck"],
    [48, "Drowzee"],
    [49, "Golem"],
    [50, "MissingNo. (Heracross)"],
    [51, "Magmar"],
    [52, "MissingNo. (Ho-Oh)"],
    [53, "Electabuzz"],
    [54, "Magneton"],
    [55, "Koffing"],
    [56, "MissingNo. (Sneasel)"],
    [57, "Mankey"],
    [58, "Seel"],
    [59, "Diglett"],
    [60, "Tauros"],
    [61, "MissingNo. (Teddiursa)"],
    [62, "MissingNo. (Ursaring)"],
    [63, "MissingNo. (Slugma)"],
    [64, "Farfetch'd"],
    [65, "Venonat"],
    [66, "Dragonite"],
    [67, "MissingNo. (Magcargo)"],
    [68, "MissingNo. (Swinub)"],
    [69, "MissingNo. (Piloswine)"],
    [70, "Doduo"],
    [71, "Poliwag"],
    [72, "Jynx"],
    [73, "Moltres"],
    [74, "Articuno"],
    [75, "Zapdos"],
    [76, "Ditto"],
    [77, "Meowth"],
    [78, "Krabby"],
    [79, "MissingNo. (Corsola)"],
    [80, "MissingNo. (Remoraid)"],
    [81, "MissingNo. (Octillery)"],
    [82, "Vulpix"],
    [83, "Ninetales"],
    [84, "Pikachu"],
    [85, "Raichu"],
    [86, "MissingNo. (Delibird)"],
    [87, "MissingNo. (Mantine)"],
    [88, "Dratini"],
    [89, "Dragonair"],
    [90, "Kabuto"],
    [91, "Kabutops"],
    [92, "Horsea"],
    [93, "Seadra"],
    [94, "MissingNo. (Skarmory)"],
    [95, "MissingNo. (Houndour)"],
    [96, "Sandshrew"],
    [97, "Sandslash"],
    [98, "Omanyte"],
    [99, "Omastar"],
    [100, "Jigglypuff"],
    [101, "Wigglytuff"],
    [102, "Eevee"],
    [103, "Flareon"],
    [104, "Jolteon"],
    [105, "Vaporeon"],
    [106, "Machop"],
    [107, "Zubat"],
    [108, "Ekans"],
    [109, "Paras"],
    [110, "Poliwhirl"],
    [111, "Poliwrath"],
    [112, "Weedle"],
    [113, "Kakuna"],
    [114, "Beedrill"],
    [115, "MissingNo. (Houndoom)"],
    [116, "Dodrio"],
    [117, "Primeape"],
    [118, "Dugtrio"],
    [119, "Venomoth"],
    [120, "Dewgong"],
    [121, "MissingNo. (Kingdra)"],
    [122, "MissingNo. (Phanpy)"],
    [123, "Caterpie"],
    [124, "Metapod"],
    [125, "Butterfree"],
    [126, "Machamp"],
    [127, "MissingNo. (Donphan)"],
    [128, "Golduck"],
    [129, "Hypno"],
    [130, "Golbat"],
    [131, "Mewtwo"],
    [132, "Snorlax"],
    [133, "Magikarp"],
    [134, "MissingNo. (Porygon2)"],
    [135, "MissingNo. (Stantler)"],
    [136, "Muk"],
    [137, "MissingNo. (Smeargle)"],
    [138, "Kingler"],
    [139, "Cloyster"],
    [140, "MissingNo. (Tyrogue)"],
    [141, "Electrode"],
    [142, "Clefable"],
    [143, "Weezing"],
    [144, "Persian"],
    [145, "Marowak"],
    [146, "MissingNo. (Hitmontop)"],
    [147, "Haunter"],
    [148, "Abra"],
    [149, "Alakazam"],
    [150, "Pidgeotto"],
    [151, "Pidgeot"],
    [152, "Starmie"],
    [153, "Bulbasaur"],
    [154, "Venusaur"],
    [155, "Tentacruel"],
    [156, "MissingNo. (Smoochum)"],
    [157, "Goldeen"],
    [158, "Seaking"],
    [159, "MissingNo. (Elekid)"],
    [160, "MissingNo. (Magby)"],
    [161, "MissingNo. (Miltank)"],
    [162, "MissingNo. (Blissey)"],
    [163, "Ponyta"],
    [164, "Rapidash"],
    [165, "Rattata"],
    [166, "Raticate"],
    [167, "Nidorino"],
    [168, "Nidorina"],
    [169, "Geodude"],
    [170, "Porygon"],
    [171, "Aerodactyl"],
    [172, "MissingNo. (Raikou)"],
    [173, "Magnemite"],
    [174, "MissingNo. (Entei)"],
    [175, "MissingNo. (Suicune)"],
    [176, "Charmander"],
    [177, "Squirtle"],
    [178, "Charmeleon"],
    [179, "Wartortle"],
    [180, "Charizard"],
    [181, "MissingNo. (Larvitar)"],
    [182, "MissingNo. Kabutops Fossil (Pupitar)"],
    [183, "MissingNo. Aerodactyl Fossil (Tyranitar)"],
    [184, "MissingNo. Ghost (Lugia)"],
    [185, "Oddish"],
    [186, "Gloom"],
    [187, "Vileplume"],
    [188, "Bellsprout"],
    [189, "Weepinbell"],
    [190, "Victreebel"],
];
exports.pokemonIndexMap = pokemonByIndex.map(([id, qname]) => [
    id,
    qname,
    pokedex_1.pokedex.find(({ name }) => name.english === qname)?.id || 0,
]);