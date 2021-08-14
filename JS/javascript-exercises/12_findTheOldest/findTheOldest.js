const findTheOldest = function(list) {
    if (arguments.length !== 1 || typeof(list) !== 'object')
        return 'ERROR';

    let oldest = list[0];
    let oldestAge = 0;
    let yearOfDeath;
    
    for (let i = 0; i < list.length; i++) {
        if (list[i].yearOfBirth === undefined)
            return 'ERROR';

        yearOfDeath = list[i].yearOfDeath;
        if (list[i].yearOfDeath === undefined)
            yearOfDeath = new Date().getFullYear();
        if (yearOfDeath - list[i].yearOfBirth > oldestAge) {
            oldestAge = yearOfDeath - list[i].yearOfBirth;
            oldest = list[i];
        }
    }
    return oldest;
};

module.exports = findTheOldest;
