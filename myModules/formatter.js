const formatter = {
  // Return an empty string
  blank: () => {
    return "";
  },
  // Return new line character
  newLine: () => {
    return "\n";
  },
  // Return a line of characters of a given length
  line: (length, character) => {
    let longString = "*******************************************";
    longString += "-------------------------------------------";
    longString += "===========================================";
    longString += "+++++++++++++++++++++++++++++++++++++++++++";
    longString += "                                           ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },
  // Pad the text with spaces and add a prefix and suffix character
  wrap: (text, length, character) => {
    let padLength = length - text.length - 3;
    let wrapText = character + " " + text;
    wrapText += formatter.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },
  // Surround the text in a box of a specified character
  box: (text, length, character) => {
    let boxText = formatter.newLine();
    boxText += formatter.line(length, character) + formatter.newLine();
    boxText += formatter.wrap(text, length, character) + formatter.newLine();
    boxText += formatter.line(length, character) + formatter.newLine();
    return boxText;
  },
};

module.exports = formatter;
