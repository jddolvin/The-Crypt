const formatter = require("./myModules/formatter");
const Place = require("./constructors/places");
const Player = require("./constructors/players");

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

const diningRoom = new Place(
  "The Dining Room",
  "You are in an enormous dining room. The grandfather clock ticks away."
)

let player1 = new Player("Justin", 50);
player1.place = library;
player1.addItem("a rusty key");
player1.addItem("The Sword of Doom");
player1.showInfo("=");

library.addItem("a rusty key");
library.addExit(kitchen);
library.addExit(greatHall);
library.showInfo();