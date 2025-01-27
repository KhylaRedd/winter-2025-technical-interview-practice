/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  let strr= str.split('');
  let compareArr = strr.reverse().join()
  console.log(compareArr)
  
  if(str === '' || str.length === 1 || str === compareArr){
    return true
  }
  return false
}

module.exports = isPalindrome;
