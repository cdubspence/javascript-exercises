const reverseString = function(word) {
    splitWord = word.split("")
    reverseWord = splitWord.reverse()
    newWord = reverseWord.join("")
    
    return newWord
};

// Do not edit below this line
module.exports = reverseString;
