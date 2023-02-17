// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return Number(Math.abs(n).toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;

// EJHF Solution
// function reverseInt(n) {
//     const reversedAbsNumber = Number(Math.abs(n).toString().split('').reverse().join(''));
//     return n < 0 ? reversedAbsNumber * - 1 : reversedAbsNumber;
// }