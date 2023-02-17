// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    let max = 0;
    let maxChar;
    const array = str.split('');
    array.map((ch)=>{
        return  chars[ch] = chars[ch] ? chars[ch] + 1 : 1;
    })
    for(char in chars){
        console.log("char", char)
        if(chars[char] > max){
            max = chars[char];
            maxChar = char;
        }
    }
    return maxChar

}


maxChar("abcdefghijklmnaaaaa");
module.exports = maxChar;


// EJHF Solution 
// function maxChar(str) {
//     let chars = {};
//     const array = str.split('');
//     array.map((ch)=>{
//         return  chars[ch] = chars[ch] ? chars[ch] + 1 : 1;
//     })
//     const values = Object.values(chars);
//     const max = Math.max(...values);
//     const obj = Object.keys(chars).find(key => chars[key] === max);
//     return obj

// }