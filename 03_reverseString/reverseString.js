const reverseString = function(str) {
    let splitString = str.split('');
    let revArray = splitString.reverse();
    let joinArray = revArray.join('');
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
