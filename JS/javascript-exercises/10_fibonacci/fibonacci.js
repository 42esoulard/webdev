const fibonacci = function() {
    if (arguments.length !== 1 || arguments[0] < 0)
        return 'OOPS';

    if (arguments[0] == 0 || arguments[0] == 1)
        return +arguments[0];
    
    let result = 1;
    let previous = 1;
    let prevPrevious = 0;

    for (let i = 2; i <= arguments[0]; i++) {
        result = previous + prevPrevious;
        prevPrevious = previous;
        previous = result;
    }
    return result;
};

module.exports = fibonacci;
