const sumAll = function() {
    if (arguments.length != 2 || typeof(arguments[0]) !== "number"
            || typeof(arguments[1]) !== "number"
            || arguments[0] < 0 || arguments[1] < 0)
        return 'ERROR';

    let low = arguments[0] < arguments[1] ? arguments[0] : arguments[1];
    let high = arguments[0] > arguments[1] ? arguments[0] : arguments[1];
    let sum = 0;
    while (low <= high)
        sum += low++;
    
    return sum;
    
};

module.exports = sumAll;
