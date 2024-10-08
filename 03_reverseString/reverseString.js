const reverseString = function(word) {
    
    let letterArray = [];
    for (const letters of word) {
        letterArray.push(letters);
    }
    const arrayReversed = letterArray.reverse ();

    wordReversedCommas = arrayReversed.toString()
    
    let wordReversed = wordReversedCommas.replace(/,/g,"")

    return wordReversed
};

// Do not edit below this line
module.exports = reverseString;
