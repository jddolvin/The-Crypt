const spacer = require("./myModules/formatter");

let player1 = {
  name: "Justin",
  health: 50,
  place: "The Dungeon of Doom",
  items: ["A trusty lamp"],
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

// Define a function to build a string for the display of player items
const getPlayerItems = (player) => {
  let itemsString = "Items:" + spacer.newLine();
  player.items.forEach((item) => {
    itemsString += "  - " + item + spacer.newLine();
  });

  return itemsString;
};

const getPlayerInfo = (player, borderCharacter) => {
  // Initialize empty string for player info
  let info = "";
  let place = getPlayerPlace(player);
  let health = getPlayerHealth(player);
  let longest = Math.max(place.length, health.length) + 4;

  info = spacer.box(getPlayerName(player), longest, borderCharacter);
  info += spacer.wrap(place, longest, borderCharacter);
  info += spacer.newLine() + spacer.wrap(health, longest, borderCharacter);
  info += spacer.newLine() + spacer.line(longest, borderCharacter);
  info += spacer.newLine();
  info += " " + getPlayerItems(player);
  info += spacer.newLine();
  info += spacer.line(longest, borderCharacter);
  info += spacer.newLine();

  return info;
};

const showPlayerInfo = (player, character) => {
  console.log(getPlayerInfo(player, character));
};

showPlayerInfo(player1, "+");