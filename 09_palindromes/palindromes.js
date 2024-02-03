const palindromes = function (text) {
  text = text.toLowerCase();
  let textArray = text.split("");
  textArray = textArray.filter((character) => {
    charCode = character.charCodeAt();
    if (
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 97 && charCode <= 122)
    )
      return character;
  });
  let editedText = textArray.join("");
  let reverse = textArray.reverse().join("");
  return editedText === reverse;
};

// Do not edit below this line
module.exports = palindromes;
