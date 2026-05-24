// ============ BRAWL STARS DATA ============
const BRAWLERS = [
  // --- Common (Trophy Road) ---
  { name:"Shelly", icon:"🔫", rarity:"common" },
  { name:"Nita", icon:"🐻", rarity:"common" },
  { name:"Colt", icon:"💥", rarity:"common" },
  { name:"Bull", icon:"🐂", rarity:"common" },
  { name:"Brock", icon:"🚀", rarity:"common" },
  { name:"El Primo", icon:"👊", rarity:"common" },
  { name:"Barley", icon:"🍺", rarity:"common" },
  { name:"Poco", icon:"🎸", rarity:"common" },
  { name:"Rosa", icon:"🌹", rarity:"common" },
  { name:"Jessie", icon:"🔧", rarity:"common" },
  { name:"Dynamike", icon:"💣", rarity:"common" },
  { name:"Tick", icon:"💀", rarity:"common" },
  { name:"8-Bit", icon:"🕹️", rarity:"common" },
  { name:"Rico", icon:"🎱", rarity:"common" },
  { name:"Darryl", icon:"🛢️", rarity:"common" },
  { name:"Penny", icon:"💰", rarity:"common" },
  { name:"Carl", icon:"⛏️", rarity:"common" },
  { name:"Jacky", icon:"🔨", rarity:"common" },
  // --- Epic ---
  { name:"Bo", icon:"🏹", rarity:"epic" },
  { name:"Piper", icon:"☂️", rarity:"epic" },
  { name:"Pam", icon:"💊", rarity:"epic" },
  { name:"Frank", icon:"🪦", rarity:"epic" },
  { name:"Bibi", icon:"⚾", rarity:"epic" },
  { name:"Bea", icon:"🐝", rarity:"epic" },
  { name:"Emz", icon:"💅", rarity:"epic" },
  { name:"Nani", icon:"🔭", rarity:"epic" },
  { name:"Stu", icon:"🏍️", rarity:"epic" },
  { name:"Edgar", icon:"🧣", rarity:"epic" },
  { name:"Griff", icon:"🤑", rarity:"epic" },
  { name:"Grom", icon:"📦", rarity:"epic" },
  { name:"Colette", icon:"📔", rarity:"epic" },
  { name:"Belle", icon:"🔔", rarity:"epic" },
  { name:"Bonnie", icon:"🎪", rarity:"epic" },
  { name:"Gale", icon:"🌬️", rarity:"epic" },
  { name:"Mandy", icon:"🍬", rarity:"epic" },
  { name:"Maisie", icon:"👮", rarity:"epic" },
  { name:"Hank", icon:"🐡", rarity:"epic" },
  { name:"Pearl", icon:"🔥", rarity:"epic" },
  { name:"Shade", icon:"🌑", rarity:"epic" },
  { name:"Berry", icon:"🫐", rarity:"epic" },
  { name:"Angelo", icon:"😇", rarity:"epic" },
  { name:"Meeple", icon:"🧩", rarity:"epic" },
  { name:"Trunk", icon:"🌳", rarity:"epic" },
  // --- Mythic ---
  { name:"Mortis", icon:"🦇", rarity:"mythic" },
  { name:"Tara", icon:"🔮", rarity:"mythic" },
  { name:"Gene", icon:"🧞", rarity:"mythic" },
  { name:"Max", icon:"⚡", rarity:"mythic" },
  { name:"Mr. P", icon:"🐧", rarity:"mythic" },
  { name:"Sprout", icon:"🌱", rarity:"mythic" },
  { name:"Byron", icon:"💉", rarity:"mythic" },
  { name:"Squeak", icon:"🫧", rarity:"mythic" },
  { name:"Buzz", icon:"🦈", rarity:"mythic" },
  { name:"Ruffs", icon:"🐕", rarity:"mythic" },
  { name:"Lou", icon:"🧊", rarity:"mythic" },
  { name:"Ash", icon:"🗑️", rarity:"mythic" },
  { name:"Lola", icon:"💋", rarity:"mythic" },
  { name:"Fang", icon:"🦶", rarity:"mythic" },
  { name:"Eve", icon:"🥚", rarity:"mythic" },
  { name:"Sam", icon:"🥊", rarity:"mythic" },
  { name:"Janet", icon:"🎤", rarity:"mythic" },
  { name:"Otis", icon:"🎨", rarity:"mythic" },
  { name:"Buster", icon:"🛡️", rarity:"mythic" },
  { name:"Gray", icon:"🖌️", rarity:"mythic" },
  { name:"R-T", icon:"🤖", rarity:"mythic" },
  { name:"Willow", icon:"🧿", rarity:"mythic" },
  { name:"Doug", icon:"🌭", rarity:"mythic" },
  { name:"Chuck", icon:"🚂", rarity:"mythic" },
  { name:"Charlie", icon:"🕷️", rarity:"mythic" },
  { name:"Mico", icon:"🐒", rarity:"mythic" },
  { name:"Melodie", icon:"🎵", rarity:"mythic" },
  { name:"Lily", icon:"🌺", rarity:"mythic" },
  { name:"Clancy", icon:"🦞", rarity:"mythic" },
  { name:"Moe", icon:"🐀", rarity:"mythic" },
  { name:"Juju", icon:"🎭", rarity:"mythic" },
  { name:"Larry & Lawrie", icon:"👥", rarity:"mythic" },
  { name:"Mina", icon:"🩸", rarity:"mythic" },
  { name:"Gigi", icon:"💄", rarity:"mythic" },
  { name:"Glowbert", icon:"💡", rarity:"mythic" },
  { name:"Damian", icon:"😈", rarity:"mythic" },
  { name:"Najia", icon:"🐍", rarity:"mythic" },
  { name:"Lumi", icon:"✨", rarity:"mythic" },
  { name:"Jae-yong", icon:"🥋", rarity:"mythic" },
  { name:"Ziggy", icon:"🦕", rarity:"mythic" },
  { name:"Alli", icon:"🐊", rarity:"mythic" },
  { name:"Starr Nova", icon:"🌟", rarity:"mythic" },
  // --- Legendary ---
  { name:"Spike", icon:"🌵", rarity:"legendary" },
  { name:"Crow", icon:"🐦‍⬛", rarity:"legendary" },
  { name:"Leon", icon:"🦎", rarity:"legendary" },
  { name:"Sandy", icon:"😴", rarity:"legendary" },
  { name:"Amber", icon:"🔶", rarity:"legendary" },
  { name:"Meg", icon:"🤖", rarity:"legendary" },
  { name:"Surge", icon:"🥤", rarity:"legendary" },
  { name:"Chester", icon:"🃏", rarity:"legendary" },
  { name:"Cordelius", icon:"🍄", rarity:"legendary" },
  { name:"Kit", icon:"🐱", rarity:"legendary" },
  { name:"Draco", icon:"🐉", rarity:"legendary" },
  { name:"Kenji", icon:"⚔️", rarity:"legendary" },
  { name:"Pierce", icon:"🗡️", rarity:"legendary" },
  // --- Ultra Legendary ---
  { name:"Kaze", icon:"🌀", rarity:"ultraLegendary" },
  { name:"Sirius", icon:"💫", rarity:"ultraLegendary" },
];

const GAME_MODES = [
  { id:"gemGrab", name:"Gem Grab", icon:"💎" },
  { id:"brawlBall", name:"Brawl Ball", icon:"⚽" },
  { id:"heist", name:"Heist", icon:"🔒" },
  { id:"bounty", name:"Bounty", icon:"⭐" },
  { id:"hotZone", name:"Hot Zone", icon:"🔥" },
  { id:"knockout", name:"Knockout", icon:"💀" },
  { id:"wipeout", name:"Wipeout", icon:"💨" },
  { id:"showdown", name:"Showdown", icon:"☠️" },
  { id:"duels", name:"Duels", icon:"🤺" },
  { id:"paintBrawl", name:"Paint Brawl", icon:"🎨" },
];

const MAPS = {
  gemGrab: ["Hard Rock Mine","Undermine","Double Swoosh","Gem Fort","Crystal Arcade","Deathcap Trap"],
  brawlBall: ["Backyard Bowl","Pinhole Punt","Sneaky Fields","Center Stage","Penalty Kick","Triple Dribble"],
  heist: ["Safe Zone","Kaboom Canyon","Hot Potato","Bridge Too Far","Pit Stop"],
  bounty: ["Layer Cake","Shooting Star","Canal Grande","Dry Season","Snake Prairie"],
  hotZone: ["Dueling Beetles","Parallel Plays","Ring of Fire","Open Business"],
  knockout: ["Goldarm Gulch","Flaring Phoenix","Belle's Rock","New Horizons","Out in the Open"],
  wipeout: ["Flowing Springs","Kaboom Canyon","Rocky Blocks"],
  showdown: ["Skull Creek","Feast or Famine","Stormy Plains","Cavern Churn","Island Invasion"],
  duels: ["Flaring Phoenix","Canal Grande","Layer Cake"],
  paintBrawl: ["Paint Splash","Color Rush","Pigment Panic"],
};

const PLAYER_EMOJIS = ["⚡","🔥","💎"];
const RARITY_LABELS = {
  common:"Közönséges", epic:"Epikus", mythic:"Mitikus",
  legendary:"Legendás", ultraLegendary:"Ultra Legendás"
};

// ============ DATA MANAGER ============
const DB = {
  _key: "brawlTracker",
  _default() {
    return {
      players: [
        { name:"Játékos 1", wins:0, losses:0, starrPlayer:0 },
        { name:"Játékos 2", wins:0, losses:0, starrPlayer:0 },
        { name:"Játékos 3", wins:0, losses:0, starrPlayer:0 },
      ],
      matches: [],
      currentLineup: null,
      setupDone: false,
    };
  },
  load() {
    try {
      const raw = localStorage.getItem(this._key);
      if (!raw) return this._default();
      const d = JSON.parse(raw);
      // ensure structure
      if (!d.players || d.players.length < 3) return this._default();
      return d;
    } catch { return this._default(); }
  },
  save(data) {
    localStorage.setItem(this._key, JSON.stringify(data));
  },
};

// ============ UTILITY ============
function getBrawler(name) {
  return BRAWLERS.find(b => b.name === name) || { name, icon:"❓", rarity:"common" };
}

function formatDate(iso) {
  const d = new Date(iso);
  const months = ["jan","feb","már","ápr","máj","jún","júl","aug","szep","okt","nov","dec"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

function winRate(w, l) {
  const total = w + l;
  return total === 0 ? 0 : Math.round((w / total) * 100);
}
