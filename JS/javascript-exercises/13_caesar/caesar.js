const caesar = function(string, shift) {
    if (arguments.length !== 2 || typeof(string) !== 'string'
        || typeof(shift) !== 'number')
        return 'ERROR';

    let array = string.split('');
    let newChar;
    while (shift >= 26)
        shift -= 26;
    if (shift < 0)
        shift = 26 + shift;

    for (let i = 0; i < array.length; i++) {

        if (/[A-Z]/.test(array[i])) {

            if (string.charCodeAt(i) + shift  > 90)//87 shift 5 = 92
                newChar = 65 + shift - (90 - string.charCodeAt(i) + 1);// 65 + 5 - (90 - 87) =  66
            else    
                newChar = string.charCodeAt(i) + shift;
            array[i] = String.fromCharCode(newChar);
        }
        else if (/[a-z]/.test(array[i])) {

            if (string.charCodeAt(i) + shift  > 122)//89 shift 10 = 99
                newChar = 97 + shift - (122 - string.charCodeAt(i) + 1);
            else    
                newChar = string.charCodeAt(i) + shift;
            array[i] = String.fromCharCode(newChar);
        }
    }
    return array.join('');
};

module.exports = caesar;
