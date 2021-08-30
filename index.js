let player1;
let player2;

player1 = {
  name: "Justin",
  health: 50,
  place: "The Dungeon of Doom",
};

player2 = {
  name: "Donny",
  health: 40,
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

// Border for player info builder
const getBorder = () => {
  return "********************************";
};

const getPlayerInfo = (player) => {
    // Initialize empty string for player info
    let playerInfo = "";
    playerInfo = "\n" + getPlayerName(player);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(player);
    playerInfo += "\n" + getPlayerHealth(player);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
}

console.log(getPlayerInfo(player2));