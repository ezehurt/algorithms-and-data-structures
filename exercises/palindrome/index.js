// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((character, index, array)=>{
        return character === array[array.length - index -1]
    })
}

module.exports = palindrome;

// EJHF Solution
// function palindrome(str) {
//     return str === str.split('').reverse().join('')
// }

// EJHF Solution 2
// function palindrome(str) {
//     let reversedWord = ''
//     for (character of str) {
//         reversedWord = character + reversedWord;
//     }
//     return str === reversedWord;

// }

// EJHF Solution 3
// function palindrome(str) {
//     return str === str.split('').reduce((acc,current)=> current + acc, '')
// }