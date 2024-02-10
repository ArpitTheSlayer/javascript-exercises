const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    let findAge = (birth, death) => {
      if (!death) {
        death = new Date().getFullYear();
      }
      return death - birth;
    };
    let oldestAge = findAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    let currentAge = findAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge > currentAge ? oldestPerson : currentPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
