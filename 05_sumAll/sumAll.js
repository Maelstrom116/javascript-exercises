const sumAll = function(beg, end) {
    
    if (beg < 0 || end < 0) {
        return 'ERROR'
     } 
    else if (typeof beg != "number" || typeof end != "number") {
        return 'ERROR'
    }
    else {

        if (beg < end) {
            let totalSum = (end - beg) + 1;
            let totalSumArray = [];

            let summy = 0;
            let summed = 0;
        
            while (totalSum--) {
                totalSumArray[totalSum] = end--
            }
        
            for (let i = 0; i < totalSumArray.length; i++){
                summed = totalSumArray[i];
                summy += summed;
            }
            return summy;

        } else {
            totalSum = (beg) + 1;
            totalSumArray = [];

            let summy = 0;
            let summed = 0;
        
            while (totalSum--) {
                totalSumArray[totalSum] = beg--
            }
        
            for (let i = 0; i < totalSumArray.length; i++){
                summed = totalSumArray[i];
                summy += summed;
            }
            return summy;
        }
}
};

// Do not edit below this line
module.exports = sumAll;

