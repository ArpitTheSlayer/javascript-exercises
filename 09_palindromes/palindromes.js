const palindromes = function (text) {
  let textArray = text
    .toLowerCase()
    .split("")
    .filter((character) => {
      charCode = character.charCodeAt();
      if (
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 97 && charCode <= 122)
      )
        return character;
    });
  let editedText = textArray.join("");
  let reversedText = textArray.reverse().join("");
  return editedText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
