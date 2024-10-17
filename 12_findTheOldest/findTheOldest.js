const findTheOldest = function(array) {
    let currentYear = new Date().getFullYear();
    let result = array.map((person) => {
        if (!person.yearOfDeath) {
            person.age = currentYear - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        return person;
    })
    .sort((a, b) => {
        if (a.age > b.age) {
            return 1;
        } else {
            return -1;
        }
    })
    return result[result.length-1];
}

// Do not edit below this line
module.exports = findTheOldest;
