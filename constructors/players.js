const formatter = require("../myModules/formatter");

class Player {
  constructor(name, health) {
    const newLine = formatter.newLine();

    this.name = name;
    this.health = health;
    this.items = [];
    this.place = null;

    this.addItem = (item) => {
      this.items.push(item);
    };

    this.getName = () => {
      return this.name;
    };

    this.getHealth = () => {
      return this.name + " has health " + this.health;
    };

    this.getPlace = () => {
      return this.name + " is in " + this.place.title;
    };

    this.getItems = () => {
      let itemsString = "Items:" + newLine;

      this.items.forEach((item) => {
        itemsString += "  - " + item + newLine;
      });
      return itemsString;
    };

    this.getInfo = (character) => {
      let place = this.getPlace();
      let health = this.getHealth();
      let longest = Math.max(place.length, health.length) + 4;

      let info = formatter.box(this.getName(), longest, character);
      info += formatter.wrap(place, longest, character);
      info += newLine + formatter.wrap(health, longest, character);
      info += newLine + formatter.line(longest, character);

      info += newLine;
      info += " " + this.getItems();
      info += newLine;
      info += formatter.line(longest, character);
      info += newLine;

      return info;
    };

    this.showInfo = (character) => {
        console.log(this.getInfo(character));
    };
  }
}

module.exports = Player;
