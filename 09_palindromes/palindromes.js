const palindromes = function (word) {
    let arr = word.replace(/[,!. ]/g,'').split('');
    let arrReversed = arr.slice().reverse().join('').toLowerCase();
    arr = arr.join('').toLowerCase();
    result = arr === arrReversed ? true : false;
    console.log(arr);
    console.log(arrReversed);
    return result
};





// Do not edit below this line
module.exports = palindromes;
