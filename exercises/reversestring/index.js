// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   return str.split('').reduce((acc, current)=>{
        return current + acc
   }, '')
}

module.exports = reverse;

// EJHF Solution
// function reverse(str) {
//     const wordArray  = str.split("");
//     let newArray  = [] 
//     wordArray.map((character)=>{
//         return newArray.unshift(character)
//     })
//     const reversedWord = newArray.join("");
//     return reversedWord
// }

// SOLUTION 1
// function reverse(str) {
//     return str.split('').reverse().join('')
// }


// SOLUTION 2
// function reverse(str) {
//     let reversed = '';
//     for(let character of str){
//         reversed = character + reversed
//     }
//     return reversed
// }

// SOLUTION 3
// function reverse(str) {
//     return str.split('').reduce((acc, current)=>{
//          return current + acc
//     }, '')
//  }