const findTheOldest = function (people) {
  // get ages
  // sort by age
  // return oldest (last element)

  const peopleWithAge = people.reduce((arr, person) => {
    person.yearOfDeath = person.yearOfDeath
      ? person.yearOfDeath
      : new Date().getFullYear();
    arr.push({
      name: person.name,
      yearOfBirth: person.yearOfBirth,
      yearOfDeath: person.yearOfDeath,
      age: person.yearOfDeath - person.yearOfBirth,
    });
    return arr;
  }, []);
  console.log(peopleWithAge);

  const sortedByAge = peopleWithAge.sort((a, b) => a.age - b.age)
  console.log(sortedByAge)

  return sortedByAge[sortedByAge.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
