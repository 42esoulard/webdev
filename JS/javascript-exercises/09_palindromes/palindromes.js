const palindromes = function (str) {
    if (arguments.length !== 1 || typeof(str) !== 'string')
        return 'ERROR';
    
    str = str.toLowerCase().replace(/[ !?.:;,]/g, '');
    
    let reverseIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[reverseIndex])
            return false;
        reverseIndex--;
    }
    return true;
};

module.exports = palindromes;
