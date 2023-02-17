// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = [];
    let index = 0;
    while(index < array.length){
        chunked.push(array.slice(index, size + index));
        index = index + size;
    }
    return chunked;
}
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

chunk(arr, 5);
module.exports = chunk;


// EJHF Solution 1
// function chunk(array, size) {
//     const numbOfSubArray = Math.floor(array.length / size);
//     let matrix=[];
//     for(let i = 0; i<=numbOfSubArray; i++){
//         const offset = i * size;
//         //Create a the new inner array
//         if(array[offset]){
//             matrix.push([]);
//         }
//         for(let j=0; j<size; j++){  
//             // If there is value insert it in the correct position
//             if(array[offset + j]){
//                 matrix[i][j] = array[offset + j];
//             }
//         }
//     }
//     return matrix;
// }

// EJHF Solution 2
// function chunk(array, size) {
//     const newArray = Array(Math.ceil(array.length / size)).fill([]);
//     const result = newArray.map((innerArray, index) => {
//         let arr = [];
//         for (let i = 0; i < size; i++) {
//             const offset = index * size;
//             if (array[i + offset]) {
//                 arr[i] = array[i + offset];
//             }
//         }
//         return arr;
//     })
//     return result;
// }

// EJHF Solution 3
// function chunk(array, size) {
//     let chunked = [];
//     let index = 0;
//     for(let i = 0; i < Math.ceil(array.length / size); i++){
//         chunked.push(array.slice(index, size + index));
//         index = index + size;
//     }
//     return chunked;
// }
// SOLUTION 1 
// function chunk(array, size) {
//     let chunked = [];
//     for(element of array){
//         const last = chunked[chunked.length - 1];
//         if(!last || last?.length === size){
//             chunked.push([element]);
//         } else {
//             last.push(element)
//         }
//     }
//     return chunked
// }