const removeFromArray = function(array) {
    if (typeof(array) !== "object")
        return ;

    for (let i = 1; i < arguments.length; i++) {
        
        if (((typeof(arguments[i]) === 'string' || typeof(arguments[i]) === 'number') 
                && array.indexOf(arguments[i]) >= 0) && typeof(arguments[i]) 
                === typeof(array[array.indexOf(arguments[i])]))
            array.splice(array.indexOf(arguments[i]), 1);
    }
    return array;
};

module.exports = removeFromArray;
