function removeFromArray (num, rmv) {
    // const args = Array.prototype.slice.call(arguments, 1);
    // return args.join(num);
    const args = Array.prototype.slice.call(rmv);
    return Array.from(args);
    }
    


// Do not edit below this line
module.exports = removeFromArray;
