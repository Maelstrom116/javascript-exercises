const repeatString = function(str, times) {
    let greeting = '';
    for(let i = 0; i < times; i++) {
        greeting += str
    }
    
    if (times < 0) {
        return 'ERROR'
    } else {
        return greeting;
    }
}


// Do not edit below this line
module.exports = repeatString;
