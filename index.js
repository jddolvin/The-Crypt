const spacer = require("./myModules/formatter");

let player1 = {
  name: "Justin",
  health: 50,
  place: "The Dungeon of Doom",
};

let player2 = {
  name: "Donny",
  health: 50,
  place: "The Old Library",
};

// Get player name
const getPlayerName = (player) => {
  return player.name;
};

// Get player health text
const getPlayerHealth = (player) => {
  return player.name + " has health " + player.health;
};

// Get player location text
const getPlayerPlace = (player) => {
  return player.name + " is in " + player.place;
};

const getPlayerInfo = (player, borderCharacter) => {
  // Initialize empty string for player info
  let playerInfo = "";
  let place = getPlayerPlace(player);
  let health = getPlayerHealth(player);
  let longest = Math.max(place.length, health.length) + 4;

  playerInfo = spacer.box(getPlayerName(player), longest, borderCharacter);
  playerInfo += spacer.wrap(place, longest, borderCharacter);
  playerInfo +=
    spacer.newLine() + spacer.wrap(health, longest, borderCharacter);
  playerInfo += spacer.newLine() + spacer.line(longest, borderCharacter);
  playerInfo += spacer.newLine();

  return playerInfo;
};

console.log(getPlayerInfo(player1, "="));
console.log(getPlayerInfo(player2, "="));