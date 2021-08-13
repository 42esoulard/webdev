const repeatString = function(string, times) {
    let result = "";
    if (times < 0)
        return "ERROR";

    for(let i = 0; i < times; i++) 
        result += string;
    return result;
    
};

module.exports = repeatString;
