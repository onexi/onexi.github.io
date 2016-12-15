// add to words total and words per language
var incrementWords = function (word, language) {

    // add to wordsTotal
    if (word in wordsTotal){
        wordsTotal[word] += 1;
    }
    else{
        wordsTotal[word] = 1;
    }

    // add wordsPerLanguage
    if (word in wordsPerLanguage){
        if (language in wordsPerLanguage[word]){
            wordsPerLanguage[word][language] += 1;
        }
        else{
            wordsPerLanguage[word][language] = 1;
        }        
    }
    else{
        wordsPerLanguage[word] = {};
        wordsPerLanguage[word][language] = 1;
    }
};