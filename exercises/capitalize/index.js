// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return str.split("").map((char, index, arr) => {
        if (arr[index - 1] === ' ' || index === 0) {
            return char.toUpperCase();
        } else {
            return char;
        }
    }).join("");
}
capitalize('a short sentence')
module.exports = capitalize;


// EJHF Solution 1
// function capitalize(str) {
//     return str.split(" ").map(word => {
//         const lastChars = word.split("").slice(1);
//         const capitalizedFirstChar = word[0].toUpperCase()
//         return [capitalizedFirstChar,...lastChars].join("")
//     }).join(" ");
// }

// EJHF Solution 2
// function capitalize(str) {
//     return str.split("").map((char, index, arr) => {
//         if (arr[index - 1] === ' ' || index === 0) {
//             return char.toUpperCase();
//         } else {
//             return char;
//         }
//     }).join("");
// }