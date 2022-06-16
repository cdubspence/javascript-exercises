const repeatString = function(word, num) {
    let newString =''
    if (num < 0) {
        return 'ERROR'
    } else {
        for (i = 0; i < num; i++) {
            newString += word;
        }
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
