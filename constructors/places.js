const formatter = require("../myModules/formatter");

class Place {
  constructor(title, description) {
    const newLine = formatter.newLine();

    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = {};

    this.getInfo = () => {
      let infoString = this.getTitle();
      infoString += this.description;
      infoString += newLine + newLine;
      infoString += this.getItems() + newLine;
      infoString += this.getExits();
      infoString += formatter.line(40, "=") + newLine;
      return infoString;
    };

    this.getItems = () => {
      let itemsString = "Items: " + formatter.newLine();
      this.items.forEach((item) => {
        itemsString += "  - " + item;
        itemsString += formatter.newLine();
      });
      return itemsString;
    };

    this.getExits = () => {
      let exitsString = "Exits from " + this.title;
      exitsString += ":" + newLine;

      Object.keys(this.exits).forEach((key) => {
        exitsString += "  - " + key;
        exitsString += newLine;
      });

      return exitsString;
    };

    this.getTitle = () => {
      return formatter.box(this.title, this.title.length + 4, "=");
    };

    this.showInfo = () => {
      console.log(this.getInfo());
    };

    this.addItem = (item) => {
      this.items.push(item);
    };

    this.addExit = (direction, exit) => {
      this.exits[direction] = exit;
    };
  }
}

module.exports = Place;
