function calculateProbability(word,language,training){

    // probability that word shows up in a language
    // e.g. the probability that "bonjour" shows up in a French document
    var wordProbability = wordCountInLanguage(word, language) / training.docCounts[language];

    // probability that word is not in language
    var wordNotProbability = wordNotInLanguageCount(word, language) / training.docNotInCounts[language];

    // probability that document is in a "language" given that "word" is in it
    // e.g. probability that document is french given that "bonjour" is in it
    // http://en.wikipedia.org/w/index.php?title=Naive_Bayes_spam_filtering#Computing_the_probability_that_a_message_containing_a_given_word_is_spam
    var probability = wordProbability / (wordProbability + wordNotProbability);

    // avoid 0 and 1 for later log calculations
    if (probability === 0) probability = 0.01;
    else if (probability === 1) probability = 0.99;
    return probability;    
}
