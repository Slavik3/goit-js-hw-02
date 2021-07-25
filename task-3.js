const findLongestWord = function (string) {
  let strSplit = string.split(" ");
  let longestWord = 0;
  let word = null;
  for (let i = 0; i < strSplit.length; i++) {
    if (longestWord < strSplit[i].length) {
      longestWord = strSplit[i].length;
      word = strSplit[i];
    }
  }
  return word;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force's
