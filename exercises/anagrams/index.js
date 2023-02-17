// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function stringToObject(str) {
    const stringToMap = {};
    const arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (!stringToMap[arr[i]]) {
            stringToMap[arr[i]] = 1;
        } else {
            stringToMap[arr[i]] = stringToMap[arr[i]] + 1;
        }
    }
    return stringToMap;
}

function compareObject(objectA, ObjectB) {
    const keys1 = Object.keys(objectA);
    const keys2 = Object.keys(ObjectB);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (objectA[key] !== ObjectB[key]) {
            return false;
        }
    }
    return true;

}

function removeAllSpecialCharactersAndWhiteSpaces(str) {
    return str.replace(/[^\w]/g, "").toLowerCase();
}

function anagrams(stringA, stringB) {
    return removeAllSpecialCharactersAndWhiteSpaces(stringA).split('').sort().join('') === removeAllSpecialCharactersAndWhiteSpaces(stringB).split('').sort().join('') 
}
anagrams('rail safety', 'fairy tales')
module.exports = anagrams;

// EJHF Solution 1
// function stringToObject(str) {
//     const stringToMap = {};
//     const arr = str.split('')
//     for (let i = 0; i < arr.length; i++) {
//         if (!stringToMap[arr[i]]) {
//             stringToMap[arr[i]] = 1;
//         } else {
//             stringToMap[arr[i]] = stringToMap[arr[i]] + 1;
//         }
//     }
//     return stringToMap;
// }

// function removeAllSpecialCharactersAndWhiteSpaces(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase();
// }

// function compareObject(objectA, ObjectB) {
//     const keys1 = Object.keys(objectA);
//     const keys2 = Object.keys(ObjectB);
//     if (keys1.length !== keys2.length) {
//         return false;
//     }
//     for (let key of keys1) {
//         if (objectA[key] !== ObjectB[key]) {
//             return false;
//         }
//     }
//     return true;

// }
// function anagrams(stringA, stringB) {
//     const stringAFormatted = removeAllSpecialCharactersAndWhiteSpaces(stringA);
//     const stringBFormatted = removeAllSpecialCharactersAndWhiteSpaces(stringB);

//     const stringAMap = stringToObject(stringAFormatted);
//     const stringBMap = stringToObject(stringBFormatted);

//     return compareObject(stringAMap, stringBMap);
    
// }

//EJHF Solution 2
// function removeAllSpecialCharactersAndWhiteSpaces(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase();
// }

// function anagrams(stringA, stringB) {
//     return removeAllSpecialCharactersAndWhiteSpaces(stringA).split('').sort().join('') === removeAllSpecialCharactersAndWhiteSpaces(stringB).split('').sort().join('') 
// }