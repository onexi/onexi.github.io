// filtering function, removes duplicates
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}

// create tokens from document
var tokenize = function (text) {
    text = text.toLowerCase();
    // remove non-alphanumeric chars
    text = text.replace(/\W/g, ' '); 
    // replace blank segments with single blank space
    text = text.replace(/\s+/g, ' ');
    // remove leading/trailing whitespace
    text = text.trim();
    // create array using empty space as separator
    text = text.split(' ');
    // remove duplicate words
    text = text.filter(unique);    
    return text;
};
