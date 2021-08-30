const formatter = require("./myModules/formatter");
const Place = require("./constructors/places");
const Player = require("./constructors/players");

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
  let itemsString = "Items:" + formatter.newLine();
  player.items.forEach((item) => {
    itemsString += "  - " + item + formatter.newLine();
  });

  return itemsString;
};

const getPlayerInfo = (player, borderCharacter) => {
  // Initialize empty string for player info
  let info = "";
  let place = getPlayerPlace(player);
  let health = getPlayerHealth(player);
  let longest = Math.max(place.length, health.length) + 4;

  info = formatter.box(getPlayerName(player), longest, borderCharacter);
  info += formatter.wrap(place, longest, borderCharacter);
  info +=
    formatter.newLine() + formatter.wrap(health, longest, borderCharacter);
  info += formatter.newLine() + formatter.line(longest, borderCharacter);
  info += formatter.newLine();
  info += " " + getPlayerItems(player);
  info += formatter.newLine();
  info += formatter.line(longest, borderCharacter);
  info += formatter.newLine();

  return info;
};

const showPlayerInfo = (player, character) => {
  console.log(getPlayerInfo(player, character));
};

const library = new Place(
  "The Old Library",
  "You are in a library. Dusty books line the walls."
);

const kitchen = new Place(
  "The Kitchen",
  "You are in the kitchen. There is a disturbing smell."
);

const greatHall = new Place(
  "The Great Hall",
  "You are in a large hall. It is strangely empty."
);

let player1 = new Player("Justin", 50);
player1.place = library;
player1.addItem("a rusty key");
player1.addItem("The Sword of Doom");
player1.showInfo("=");

library.addItem("a rusty key");
library.addExit(kitchen);
library.addExit(greatHall);
library.showInfo();