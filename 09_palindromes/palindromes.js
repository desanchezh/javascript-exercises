const palindromes = function (word) {
    let arr = word.replace(/[,!. ]/g,'').split('');
    let arrReversed = arr.slice().reverse().join('').toLowerCase();
    arr = arr.join('').toLowerCase();
    return arr === arrReversed;
    
};





// Do not edit below this line
module.exports = palindromes;
