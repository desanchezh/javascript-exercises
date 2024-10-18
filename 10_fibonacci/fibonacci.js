
const fibonacci = function(index) {
    let fibArray = [0, 1]
    if (index < 0) {return "OOPS"}
    else{
        for (i = 2; i <= index; i++) {
            fibArray[i] = fibArray[i-1] + fibArray[i-2];
        }
        return fibArray[index];
    }
    
    }

// Do not edit below this line
module.exports = fibonacci;
