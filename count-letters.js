function countLetters(string) {
  var result = {};
  var noSpaces = string.toLowerCase().split(' ').join('');

  for (var i = 0; i < noSpaces.length; i++) {
    var letter = noSpaces[i];
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

console.log(countLetters('lighthouse in the house'));