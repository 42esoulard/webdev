const leapYears = function(year) {
    if (arguments.length != 1 || typeof(arguments[0]) !== 'number')
        return 'ERROR';
    
    if (year % 4 === 0) {
        if (year % 100 != 0)
            return true;
        else if (year % 400 === 0)
            return true;
    }
    return false;
};

module.exports = leapYears;
