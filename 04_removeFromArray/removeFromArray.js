const removeFromArray = function(array, ...toRemove) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        
        if (!toRemove.includes(array[i])) {
            newArray.push(array[i]);
            }
        }
        return newArray;
    }
    

// Do not edit below this line
module.exports = removeFromArray;
