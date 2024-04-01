const findTheOldest = (peopleObjects) => {
  let oldest;
  let initial = 0;

  peopleObjects.forEach(person => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }

    const age = person.yearOfDeath - person.yearOfBirth;
    if (age > initial) {
      initial = age;
      oldest = person;
    }
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
