export function getRealTag(source: string) {
  return sourceStateMap.get(source) ?? null;
}

export const sourceState: Record<
  string,
  { source: string[]; language: string[] }
> = {
  // Core
  "core-rulebook": {
    source: ["Core Rulebook", "Pathfinder Core Rulebook"],
    language: ["it"],
  },
  bestiary1: {
    source: ["Bestiary", "Pathfinder Bestiary"],
    language: ["it"],
  },
  "gamemastery-guide": {
    source: ["Gamemastery Guide", "Pathfinder Gamemastery Guide"],
    language: ["it"],
  },
  bestiary2: {
    source: ["Bestiary 2", "Pathfinder Bestiary 2"],
    language: ["it"],
  },
  "advanced-players-guide": {
    source: ["Advanced Player's Guide", "Pathfinder Advanced Player's Guide"],
    language: ["it"],
  },
  "beginner-box": {
    source: [
      "Pathfinder Beginner Box: Hero's Handbook",
      "Pathfinder Beginner Box",
      "Pathfinder Beginners Box",
    ],
    language: ["it"],
  },
  bestiary3: {
    source: ["Bestiary 3", "Pathfinder Bestiary 3"],
    language: ["it"],
  },
  "secrets-of-magic": {
    source: ["Secrets of Magic", "Pathfinder Secrets of Magic"],
    language: [],
  },
  "guns-and-gears": {
    source: [
      "Guns & Gears",
      "Pathfinder Guns and Gears",
      "Pathfinder Guns & Gears",
    ],
    language: [],
  },
  "book-of-the-dead": {
    source: ["Pathfinder Book of the Dead", "Book of the Dead"],
    language: [],
  },
  "dark-archive": {
    source: ["Pathfinder Dark Archive", "Dark Archive", "Tomorrow's Feast"],
    language: [],
  },
  "treasure-vault": {
    source: [],
    language: [],
  },
  "rage-of-elements": {
    source: [],
    language: [],
  },
  // Lost Omens
  "character-guide": {
    source: ["Character Guide", "Pathfinder Lost Omens: Character Guide"],
    language: ["it"],
  },
  "world-guide": {
    source: [
      "World Guide",
      "Pathfinder Lost Omens: World Guide",
      "Pathfinder Lost Omens World Guide",
    ],
    language: ["it"],
  },
  "gods-and-magic": {
    source: ["Gods & Magic", "Pathfinder Lost Omens: Gods & Magic"],
    language: ["it"],
  },
  legends: {
    source: ["Legends", "Pathfinder Lost Omens: Legends"],
    language: [],
  },
  "pfs-guide": {
    source: [
      "PFS Guide",
      "Pathfinder Lost Omens: PFS Guide",
      "Pathfinder Lost Omens: Pathfinder Society Guide",
    ],
    language: ["it"],
  },
  "ancestry-guide": {
    source: ["Ancestry Guide", "Pathfinder Lost Omens: Ancestry Guide"],
    language: ["it"],
  },
  "the-mwangi-expanse": {
    source: ["The Mwangi Expanse", "Pathfinder Lost Omens: The Mwangi Expanse"],
    language: [],
  },
  "grand-bazaar": {
    source: [
      "Grand Bazaar",
      "Pathfinder Lost Omens: The Grand Bazaar",
      "Pathfinder Lost Omens: Grand Bazaar",
    ],
    language: [],
  },
  absalom: {
    source: ["Pathfinder Lost Omens: Absalom, City of Lost Omens"],
    language: [],
  },
  "monsters-of-myth": {
    source: ["Pathfinder Lost Omens: Monsters of Myth"],
    language: [],
  },
  "knights-of-lastwall": {
    source: [
      "Pathfinder Lost Omens: Knights of Lastwall",
      "Knights of Lastwall",
    ],
    language: [],
  },
  "travel-guide": {
    source: ["Pathfinder Lost Omens: Travel Guide"],
    language: [],
  },
  "impossible-lands": {
    source: ["Pathfinder Lost Omens: Impossible Lands", "Impossible Lands"],
    language: [],
  },
  firebrands: {
    source: [],
    language: [],
  },
  highhelm: {
    source: [],
    language: [],
  },

  // Adventure Paths
  "age-of-ashes1": {
    source: [
      "Pathfinder: Age of Ashes Player's Guide",
      "Age of Ashes Player's Guide",
      "Pathfinder #145",
      "Pathfinder #145: Hellknight Hill",
    ],
    language: ["it"],
  },
  "age-of-ashes2": {
    source: ["Pathfinder #146", "Pathfinder #146: Cult of Cinders"],
    language: ["it"],
  },
  "age-of-ashes3": {
    source: ["Pathfinder #147", "Pathfinder #147: Tomorrow Must Burn"],
    language: ["it"],
  },
  "age-of-ashes4": {
    source: ["Pathfinder #148", "Pathfinder #148: Fires of the Haunted City"],
    language: ["it"],
  },
  "age-of-ashes5": {
    source: ["Pathfinder #149", "Pathfinder #149: Against the Scarlet Triad"],
    language: ["it"],
  },
  "age-of-ashes6": {
    source: ["Pathfinder #150", "Pathfinder #150: Broken Promises"],
    language: ["it"],
  },
  "extinction-curse1": {
    source: [
      "Pathfinder: Extinction Curse Player's Guide",
      "Pathfinder #151",
      "Pathfinder #151: The Show Must Go On",
    ],
    language: [],
  },
  "extinction-curse2": {
    source: ["Pathfinder #152", "Pathfinder #152: Legacy of the Lost God"],
    language: [],
  },
  "extinction-curse3": {
    source: [
      "Pathfinder #153",
      "Pathfinder #153: Life's Long Shadows",
      "Pathfinder #153: Life's Long Shadow",
    ],
    language: [],
  },
  "extinction-curse4": {
    source: ["Pathfinder #154", "Pathfinder #154: Siege of the Dinosaurs"],
    language: [],
  },
  "extinction-curse5": {
    source: ["Pathfinder #155", "Pathfinder #155: Lord of the Black Sands"],
    language: [],
  },
  "extinction-curse6": {
    source: ["Pathfinder #156", "Pathfinder #156: The Apocalypse Prophet"],
    language: [],
  },
  "agents-of-edgewatch1": {
    source: [
      "Pathfinder: Agents of Edgewatch Player's Guide",
      "Agents of Edgewatch Player's Guide",
      "Pathfinder #157",
      "Pathfinder #157: Devil at the Dreaming Palace",
    ],
    language: ["it"],
  },
  "agents-of-edgewatch2": {
    source: ["Pathfinder #158", "Pathfinder #158: Sixty Feet Under"],
    language: ["it"],
  },
  "agents-of-edgewatch3": {
    source: ["Pathfinder #159", "Pathfinder #159: All or Nothing"],
    language: ["it"],
  },
  "agents-of-edgewatch4": {
    source: [
      "Pathfinder #160",
      "Pathfinder #160: Assault on Hunting Lodge Seven",
    ],
    language: ["it"],
  },
  "agents-of-edgewatch5": {
    source: ["Pathfinder #161", "Pathfinder #161: Belly of the Black Whale"],
    language: ["it"],
  },
  "agents-of-edgewatch6": {
    source: ["Pathfinder #162", "Pathfinder #162: Ruins of the Radiant Siege"],
    language: ["it"],
  },
  "abomination-vaults1": {
    source: [
      "Abomination Vaults Player's Guide",
      "Pathfinder: Abomination Vaults Player's Guide",
      "Pathfinder #163",
      "Pathfinder #163: Ruins of Gauntlight",
    ],
    language: ["it"],
  },
  "abomination-vaults2": {
    source: ["Pathfinder #164", "Pathfinder #164: Hands of the Devil"],
    language: ["it"],
  },
  "abomination-vaults3": {
    source: [
      "Pathfinder #165",
      "Patfinder #165: Eyes of Empty Death",
      "Pathfinder #165: Eyes of Empty Death",
    ],
    language: ["it"],
  },
  "abomination-vaults-hc": {
    source: ["Pathfinder Abomination Vaults Compilation Hardcover"],
    language: ["it"],
  },
  "fists-of-the-ruby-phoenix1": {
    source: [
      "Pathfinder: Fists of the Ruby Phoenix Player's Guide",
      "Pathfinder #166",
      "Pathfinder #166: Despair on Danger Island",
    ],
    language: [],
  },
  "fists-of-the-ruby-phoenix2": {
    source: ["Pathfinder #167", "Pathfinder #167: Ready? Fight!"],
    language: [],
  },
  "fists-of-the-ruby-phoenix3": {
    source: [
      "Pathfinder #168",
      "Patfinder #168: King of the Mountain",
      "Pathfinder #168: King of the Mountain",
    ],
    language: [],
  },
  "strength-of-thousands1": {
    source: [
      "Strength of Thousands Player's Guide",
      "Pathfinder #169",
      "Pathfinder #169: Kindled Magic",
    ],
    language: [],
  },
  "strength-of-thousands2": {
    source: ["Pathfinder #170", "Pathfinder #170: Spoken on the Song Wind"],
    language: [],
  },
  "strength-of-thousands3": {
    source: ["Pathfinder #171", "Pathfinder #171: Hurricane's Howl"],
    language: [],
  },
  "strength-of-thousands4": {
    source: [
      "Pathfinder #172",
      "Pathfinder #172: Secrets of the Temple-City",
      "Pathfinder #172: Secrets of the Temple City",
    ],
    language: [],
  },
  "strength-of-thousands5": {
    source: ["Pathfinder #173: Doorway to the Red Star"],
    language: [],
  },
  "strength-of-thousands6": {
    source: ["Pathfinder #174: Shadows of the Ancients"],
    language: [],
  },
  "quest-for-the-frozen-flame1": {
    source: [
      "Pathfinder: Quest for the Frozen Flame Player's Guide",
      "Pathfinder #175: Broken Tusk Moon",
    ],
    language: [],
  },
  "quest-for-the-frozen-flame2": {
    source: ["Pathfinder #176: Lost Mammoth Valley"],
    language: [],
  },
  "quest-for-the-frozen-flame3": {
    source: ["Pathfinder #177: Burning Tundra"],
    language: [],
  },
  "outlaws-of-alkenstar1": {
    source: [
      "Pathfinder: Outlaws of Alkenstar Player's Guide",
      "Pathfinder #178: Punks in a Powder Keg",
    ],
    language: [],
  },
  "outlaws-of-alkenstar2": {
    source: ["Pathfinder #179: Cradle of Quartz"],
    language: [],
  },
  "outlaws-of-alkenstar3": {
    source: ["Pathfinder #180: The Smoking Gun"],
    language: [],
  },
  "blood-lords1": {
    source: [
      "Pathfinder: Blood Lords Player's Guide",
      "Pathfinder #181: Zombie Feast",
    ],
    language: [],
  },
  "blood-lords2": {
    source: ["Pathfinder #182: Graveclaw"],
    language: [],
  },
  "blood-lords3": {
    source: ["Pathfinder #183: Field of Maidens"],
    language: [],
  },
  "blood-lords4": {
    source: ["Pathfinder #184: The Ghouls Hunger"],
    language: [],
  },
  "blood-lords5": {
    source: ["Pathfinder #185: A Taste of Ashes"],
    language: [],
  },
  "blood-lords6": {
    source: ["Pathfinder #186: Ghost King's Rage"],
    language: [],
  },
  gatewalkers1: {
    source: [
      "Pathfinder Gatewalkers Player's Guide",
      "Pathfinder #187: The Seventh Arch",
    ],
    language: [],
  },
  gatewalkers2: {
    source: [],
    language: [],
  },
  gatewalkers3: {
    source: [],
    language: [],
  },
  kingmaker: {
    source: [
      "Pathfinder Kingmaker Player's Guide",
      "Pathfinder Kingmaker",
      "Kingmaker Adventure Path",
    ],
    language: [],
  },
  // Adventures
  "the-fall-of-plaguestone": {
    source: [
      "The Fall of Plaguestone",
      "Pathfinder Adventure: The Fall of Plaguestone",
    ],
    language: ["it"],
  },
  "little-trouble-in-big-absalom": {
    source: ["Pathfinder Adventure: Little Trouble in Big Absalom"],
    language: [],
  },
  "the-slithering": {
    source: ["The Slithering", "Pathfinder Adventure: The Slithering"],
    language: [],
  },
  "troubles-in-otari": {
    source: ["Troubles in Otari", "Pathfinder Adventure: Troubles in Otari"],
    language: ["it"],
  },
  malevolence: {
    source: ["Malevolence", "Pathfinder Adventure: Malevolence"],
    language: [],
  },
  "night-of-the-gray-death": {
    source: [
      "Night of the Gray Death",
      "Pathfinder Adventure: Night of the Gray Death",
    ],
    language: [],
  },
  "threshold-of-knowledge": {
    source: ["Pathfinder Adventure: Threshold of Knowledge"],
    language: [],
  },
  "shadows-at-sundown": {
    source: ["Pathfinder Adventure: Shadows at Sundown"],
    language: [],
  },
  "a-fistful-of-flowers": {
    source: ["Pathfinder Adventure: A Fistful of Flowers"],
    language: [],
  },
  "crown-of-the-kobold-king": {
    source: [
      "Pathfinder Adventure: Crown of the Kobold King",
      "Crown of the Kobold King",
    ],
    language: [],
  },
  "the-enmity-cycle": {
    source: [],
    language: [],
  },
  "the-dead-gods-hand": {
    source: [],
    language: [],
  },
  // One-Shots
  "dinner-at-lionlodge": {
    source: ["Pathfinder One-Shot #2: Dinner at Lionlodge"],
    language: [],
  },
  "sundered-waves": {
    source: [],
    language: [],
  },
  "head-shot-the-rot": {
    source: [],
    language: [],
  },
  "mark-of-the-mantis": {
    source: [],
    language: [],
  },
  // Other Random Stuff
  "random-sources": {
    source: [
      "Pathfinder Blog",
      "Pathfinder Special: Fumbus!",
      "Pathfinder Special: Fumbus",
      "Redpitch Alchemy",
      "Pathfinder Blog: The Waters of Stone Ring Pond",
      "Pathfinder Blog: April Fools",
      "Paizo Blog: Kineticist Playtest Analysis",
      "Azarketi Ancestry Web Supplement",
    ],
    language: [],
  },
  "random-society": {
    source: [
      "Organized Play Foundation",
      "Pathfinder Blog: Pathfinder Society Year 4 Rule Updates",
      "Pathfinder Society Scenario #1-00: Origin of the Open Road",
      "Pathfinder Society Scenario #1-03: Escaping the Grave",
      "Pathfinder Society Scenario #1-15: The Blooming Catastrophe",
      "Pathfinder Society Scenario #1-19: Iolite Squad Alpha",
      "Pathfinder Society Scenario #1-23: The Star-Crossed Court",
      "Pathfinder Society Scenario #1-24: Lightning Strikes, Stars Fall",
      "Pathfinder Society Scenario #2-22: Breaking the Storm: Excising Ruination",
      "PFS Quest #5: The Dragon Who Stole Evoking Day",
      "Pathfinder Society Quest #5: The Dragon Who Stole Evoking Day",
      "Pathfinder Society Quest #10: The Broken Scales",
    ],
    language: [],
  },
};
export const sourceStateMap = new Map(
  Object.entries(sourceState).flatMap(([k, v]) => v.source.map((h) => [h, k]))
);

export const weaponPropertyRunes = [
  ["Anarchic", "Core Rulebook"],
  ["Ancestral Echoing", "Pathfinder #148: Fires of the Haunted City"],
  ["Anchoring", "Grand Bazaar"],
  ["Greater Anchoring", "Grand Bazaar"],
  ["Axiomatic", "Core Rulebook"],
  ["Bane", "Secrets of Magic"],
  ["Bloodbane", "Pathfinder #148: Fires of the Haunted City"],
  ["Greater Bloodbane", "Pathfinder #148: Fires of the Haunted City"],
  ["Bloodthirsty", "Grand Bazaar"],
  ["Brilliant", "Secrets of Magic"],
  ["Greater Brilliant", "Secrets of Magic"],
  ["Weapon Called Rune", "Knights of Lastwall"],
  ["Conducting", "Ancestry Guide"],
  ["Corrosive", "Core Rulebook"],
  ["Greater Corrosive", "Core Rulebook"],
  ["Crushing", "Grand Bazaar"],
  ["Greater Crushing", "Grand Bazaar"],
  ["Cunning", "PFS Guide"],
  ["Dancing", "Core Rulebook"],
  ["Deathdrinking", "Kingmaker Companion Guide"],
  ["Demolishing", "Pathfinder Special: Fumbus"],
  ["Disrupting", "Core Rulebook"],
  ["Greater Disrupting", "Core Rulebook"],
  ["Energizing", "Grand Bazaar"],
  ["Extending", "Secrets of Magic"],
  ["Greater Extending", "Secrets of Magic"],
  ["Fanged", "Grand Bazaar"],
  ["Greater Fanged", "Grand Bazaar"],
  ["Major Fanged", "Grand Bazaar"],
  ["Fearsome", "Advanced Player's Guide"],
  ["Greater Fearsome", "Advanced Player's Guide"],
  ["Flaming", "Core Rulebook"],
  ["Greater Flaming", "Core Rulebook"],
  ["Frost", "Core Rulebook"],
  ["Greater Frost", "Core Rulebook"],
  ["Ghost Touch", "Core Rulebook"],
  ["Giant-Killing", "Kingmaker Companion Guide"],
  ["Greater Giant-Killing", "Kingmaker Companion Guide"],
  ["Grievous", "Core Rulebook"],
  ["Hauling", "Grand Bazaar"],
  ["Greater Hauling", "Grand Bazaar"],
  ["Holy", "Core Rulebook"],
  ["Hooked", "Kingmaker Companion Guide"],
  ["Hopeful", "Grand Bazaar"],
  ["Impactful", "Secrets of Magic"],
  ["Greater Impactful", "Secrets of Magic"],
  ["Keen", "Core Rulebook"],
  ["Kin-Warding", "Pathfinder #148: Fires of the Haunted City"],
  ["Pacifying", "Pathfinder #157: Devil at the Dreaming Palace"],
  ["Returning", "Core Rulebook"],
  ["Serrating", "Character Guide"],
  ["Shifting", "Core Rulebook"],
  ["Shock", "Core Rulebook"],
  ["Greater Shock", "Core Rulebook"],
  ["Speed", "Core Rulebook"],
  ["Spell-Storing", "Core Rulebook"],
  ["Thundering", "Core Rulebook"],
  ["Greater Thundering", "Core Rulebook"],
  ["Unholy", "Core Rulebook"],
  ["Vorpal", "Core Rulebook"],
  ["Wounding", "Core Rulebook"],
];

export const bombs = [
  ["Greater Acid Flask", "Core Rulebook"],
  ["Lesser Acid Flask", "Core Rulebook"],
  ["Major Acid Flask", "Core Rulebook"],
  ["Moderate Acid Flask", "Core Rulebook"],
  ["Acid Flask", "Core Rulebook"],

  ["Greater Alchemist's Fire", "Core Rulebook"],
  ["Lesser Alchemist's Fire", "Core Rulebook"],
  ["Major Alchemist's Fire", "Core Rulebook"],
  ["Moderate Alchemist's Fire", "Core Rulebook"],
  ["Alchemist's Fire", "Core Rulebook"],

  ["Greater Alignment Ampoule", "PFS Guide"],
  ["Lesser Alignment Ampoule", "PFS Guide"],
  ["Major Alignment Ampoule", "PFS Guide"],
  ["Moderate Alignment Ampoule", "PFS Guide"],
  ["Alignment Ampoule", "PFS Guide"],

  ["Greater Blight Bomb", "Advanced Player's Guide"],
  ["Lesser Blight Bomb", "Advanced Player's Guide"],
  ["Major Blight Bomb", "Advanced Player's Guide"],
  ["Moderate Blight Bomb", "Advanced Player's Guide"],
  ["Blight Bomb", "Advanced Player's Guide"],

  ["Blindpepper Bomb", "Pathfinder #157: Devil at the Dreaming Palace"],

  ["Greater Bottled Lightning", "Core Rulebook"],
  ["Lesser Bottled Lightning", "Core Rulebook"],
  ["Major Bottled Lightning", "Core Rulebook"],
  ["Moderate Bottled Lightning", "Core Rulebook"],
  ["Bottled Lightning", "Core Rulebook"],

  ["Greater Bottled Sunlight", "Book of the Dead"],
  ["Lesser Bottled Sunlight", "Book of the Dead"],
  ["Major Bottled Sunlight", "Book of the Dead"],
  ["Moderate Bottled Sunlight", "Book of the Dead"],
  ["Bottled Sunlight", "Book of the Dead"],

  ["Greater Crystal Shards", "Advanced Player's Guide"],
  ["Major Crystal Shards", "Advanced Player's Guide"],
  ["Moderate Crystal Shards", "Advanced Player's Guide"],
  ["Crystal Shards", "Advanced Player's Guide"],

  ["Greater Dread Ampoule", "Advanced Player's Guide"],
  ["Lesser Dread Ampoule", "Advanced Player's Guide"],
  ["Major Dread Ampoule", "Advanced Player's Guide"],
  ["Moderate Dread Ampoule", "Advanced Player's Guide"],
  ["Dread Ampoule", "Advanced Player's Guide"],

  ["Lesser Dwarven Daisy", "PFS Quest #5: The Dragon Who Stole Evoking Day"],
  ["Moderate Dwarven Daisy", "PFS Quest #5: The Dragon Who Stole Evoking Day"],
  ["Dwarven Daisy", "PFS Quest #5: The Dragon Who Stole Evoking Day"],

  ["Greater Frost Vial", "Core Rulebook"],
  ["Lesser Frost Vial", "Core Rulebook"],
  ["Major Frost Vial", "Core Rulebook"],
  ["Moderate Frost Vial", "Core Rulebook"],
  ["Frost Vial", "Core Rulebook"],

  ["Greater Ghost Charge", "Advanced Player's Guide"],
  ["Lesser Ghost Charge", "Advanced Player's Guide"],
  ["Major Ghost Charge", "Advanced Player's Guide"],
  ["Moderate Ghost Charge", "Advanced Player's Guide"],
  ["Ghost Charge", "Advanced Player's Guide"],

  ["Greater Goo Grenade", "Impossible Lands"],
  ["Lesser Goo Grenade", "Impossible Lands"],
  ["Major Goo Grenade", "Impossible Lands"],
  ["Moderate Goo Grenade", "Impossible Lands"],
  ["Goo Grenade", "Impossible Lands"],

  ["Greater Junk Bomb", "Pathfinder Special: Fumbus"],
  ["Lesser Junk Bomb", "Pathfinder Special: Fumbus"],
  ["Major Junk Bomb", "Pathfinder Special: Fumbus"],
  ["Moderate Junk Bomb", "Pathfinder Special: Fumbus"],
  ["Junk Bomb", "Pathfinder Special: Fumbus"],

  ["Greater Mud Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Lesser Mud Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Major Mud Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Moderate Mud Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Mud Bomb", "Pathfinder #176: Lost Mammoth Valley"],

  ["Greater Necrotic Bomb", "Pathfinder #165: Eyes of Empty Death"],
  ["Lesser Necrotic Bomb", "Pathfinder #165: Eyes of Empty Death"],
  ["Major Necrotic Bomb", "Pathfinder #165: Eyes of Empty Death"],
  ["Moderate Necrotic Bomb", "Pathfinder #165: Eyes of Empty Death"],
  ["Necrotic Bomb", "Pathfinder #165: Eyes of Empty Death"],

  ["Overloaded Brain Grenade", "Pathfinder Special: Fumbus"],

  ["Greater Pernicious Spore Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Lesser Pernicious Spore Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Major Pernicious Spore Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Moderate Pernicious Spore Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Pernicious Spore Bomb", "Pathfinder #176: Lost Mammoth Valley"],

  ["Greater Peshspine Grenade", "Pathfinder #149: Against the Scarlet Triad"],
  ["Lesser Peshspine Grenade", "Pathfinder #149: Against the Scarlet Triad"],
  ["Major Peshspine Grenade", "Pathfinder #149: Against the Scarlet Triad"],
  ["Moderate Peshspine Grenade", "Pathfinder #149: Against the Scarlet Triad"],
  ["Peshspine Grenade", "Pathfinder #149: Against the Scarlet Triad"],

  ["Greater Pressure Bomb", "Pathfinder Special: Fumbus"],
  ["Lesser Pressure Bomb", "Pathfinder Special: Fumbus"],
  ["Major Pressure Bomb", "Pathfinder Special: Fumbus"],
  ["Moderate Pressure Bomb", "Pathfinder Special: Fumbus"],
  ["Pressure Bomb", "Pathfinder Special: Fumbus"],

  ["Greater Redpitch Bomb", "Redpitch Alchemy"],
  ["Lesser Redpitch Bomb", "Redpitch Alchemy"],
  ["Major Redpitch Bomb", "Redpitch Alchemy"],
  ["Moderate Redpitch Bomb", "Redpitch Alchemy"],
  ["Redpitch Bomb", "Redpitch Alchemy"],

  ["Greater Star Grenade", "Pathfinder #180: The Smoking Gun"],
  ["Lesser Star Grenade", "Pathfinder #180: The Smoking Gun"],
  ["Major Star Grenade", "Pathfinder #180: The Smoking Gun"],
  ["Moderate Star Grenade", "Pathfinder #180: The Smoking Gun"],
  ["Star Grenade", "Pathfinder #180: The Smoking Gun"],

  ["Greater Sulfur Bomb", "Grand Bazaar"],
  ["Lesser Sulfur Bomb", "Grand Bazaar"],
  ["Major Sulfur Bomb", "Grand Bazaar"],
  ["Moderate Sulfur Bomb", "Grand Bazaar"],
  ["Sulfur Bomb", "Grand Bazaar"],

  ["Greater Tallow Bomb", "Pathfinder #175: Broken Tusk Moon"],
  ["Lesser Tallow Bomb", "Pathfinder #175: Broken Tusk Moon"],
  ["Major Tallow Bomb", "Pathfinder #175: Broken Tusk Moon"],
  ["Moderate Tallow Bomb", "Pathfinder #175: Broken Tusk Moon"],
  ["Tallow Bomb", "Pathfinder #175: Broken Tusk Moon"],

  ["Greater Tanglefoot Bag", "Core Rulebook"],
  ["Lesser Tanglefoot Bag", "Core Rulebook"],
  ["Major Tanglefoot Bag", "Core Rulebook"],
  ["Moderate Tanglefoot Bag", "Core Rulebook"],
  ["Tanglefoot Bag", "Core Rulebook"],

  ["Greater Thunderstone", "Core Rulebook"],
  ["Lesser Thunderstone", "Core Rulebook"],
  ["Major Thunderstone", "Core Rulebook"],
  ["Moderate Thunderstone", "Core Rulebook"],
  ["Thunderstone", "Core Rulebook"],

  ["Greater Twigjack Sack", "Pathfinder #175: Broken Tusk Moon"],
  ["Lesser Twigjack Sack", "Pathfinder #175: Broken Tusk Moon"],
  ["Major Twigjack Sack", "Pathfinder #175: Broken Tusk Moon"],
  ["Moderate Twigjack Sack", "Pathfinder #175: Broken Tusk Moon"],
  ["Twigjack Sack", "Pathfinder #175: Broken Tusk Moon"],

  ["Greater Vexing Vapor", "Grand Bazaar"],
  ["Lesser Vexing Vapor", "Grand Bazaar"],
  ["Major Vexing Vapor", "Grand Bazaar"],
  ["Moderate Vexing Vapor", "Grand Bazaar"],
  ["Vexing Vapor", "Grand Bazaar"],

  ["Greater Water Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Lesser Water Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Major Water Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Moderate Water Bomb", "Pathfinder #176: Lost Mammoth Valley"],
  ["Water Bomb", "Pathfinder #176: Lost Mammoth Valley"],
];
