const reverseString = function(str) {

    let array = str.split('');
    let tmp;
    for (let i = 0; i < str.length / 2; i++) {
        tmp = array[i];
        array[i] = array[str.length - (i + 1)];
        array[str.length - (i + 1)] = tmp;
    }
    return array.join('');
};

module.exports = reverseString;
