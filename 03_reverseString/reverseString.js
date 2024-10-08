const reverseString = function(word) {
    
    let letterArray = [];
    for (const letters of word) {
        letterArray.push(letters);
    }
    const arrayReversed = letterArray.reverse ();

    let wordReversed = "";
    for (let i = 0; i < arrayReversed.length; i++) {
            wordReversed += arrayReversed [i];
        }
    return wordReversed
}

// Do not edit below this line
module.exports = reverseString;
