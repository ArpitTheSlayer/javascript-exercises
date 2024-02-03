const removeFromArray = function (
  arrayToBeRemovedFrom,
  ...elementsToBeRemoved
) {
  for (const element of elementsToBeRemoved) {
    let elementIndex = arrayToBeRemovedFrom.indexOf(element);
    if (elementIndex >= 0) {
      arrayToBeRemovedFrom.splice(elementIndex, 1);
    }
  }
  return arrayToBeRemovedFrom;
};

// Do not edit below this line
module.exports = removeFromArray;
