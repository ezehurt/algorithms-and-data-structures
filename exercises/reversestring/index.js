// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const wordArray  = str.split("");
    let newArray  = [] 
    wordArray.map((character)=>{
        return newArray.unshift(character)
    })
    const reversedWord = newArray.join("");
    return reversedWord
}

reverse("abcd");
module.exports = reverse;
