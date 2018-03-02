var five = require('five');

function generateDict(place) {
  if (place === 'earth') {
    return {
      english: five.english(),
      hindi: five.hindi(),
      spanish: five.spanish()
    } 
  } else if (place === 'middle earth') {
    return {
      quenya: five.elvish('quenya'),
      sindarian: five.elvish('sindarin')
    }
  } else {
    return {
      piglatin: five.piglatin()
    }
  }
}

module.exports = generateDict;
// module.exports = ['foo', 'bar'];
// module.exports = { foo: 'foo', bar: 'bar' }