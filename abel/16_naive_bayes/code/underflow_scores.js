    // loop though languages in documents
    for(var language in documents){

        // stores the probability of document in language
        var logSum = 0;        
       
        // loop through the words in the input text
        for (var i = 0; i < input.words.length; i++) {
            word = input.words[i];

            // instaces of the word across all languages
            var _wordTotalCount = wordTotalCount(word);

            // if zero, no info on word, jump to next loop iteration
            if (_wordTotalCount === 0) { continue; } 

            // calculate probability
            probability = calculateProbability(word,language,training);
       
            // Underflow Prevention
            // ------------------------------
            logSum += (Math.log(1 - probability) - Math.log(probability));

            // debugging feedback                
            console.log(language + "icity of " + word + ": " + probability + ", logSum: " + logSum);
        }
        // scores
        // ------------------------------
        scores[language] = 1 / ( 1 + Math.exp(logSum) );
    }
    return scores;