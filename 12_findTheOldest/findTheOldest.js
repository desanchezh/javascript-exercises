

const findTheOldest = function(people) {
    function getAge(person) {
      person.yearOfDeath ??= new Date().getFullYear();
      person.yearOfBirth 
      return person.yearOfDeath - person.yearOfBirth;
    }
    const peopleOldestToYoungest = people.toSorted(
      (person, nextPerson) => getAge(nextPerson) - getAge(person),
    );
    const oldestPerson = peopleOldestToYoungest[0];
    return oldestPerson;


  }

// Do not edit below this line
module.exports = findTheOldest;
