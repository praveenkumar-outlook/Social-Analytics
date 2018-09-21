import _ from "underscore";

_.mixin({
  convCamelCase: (string) => {
    let word = string.split("");
    while (_.indexOf(word, "_") !== -1) {
      const scoreIndex = _.indexOf(word, "_");
      if (word[scoreIndex + 1]) {
        word[scoreIndex + 1] = word[scoreIndex + 1].toUpperCase();
      }
      word = _.reject(word, (letter, index) => {
        return index === scoreIndex;
      });
    }
    return word.join('');
  }
});