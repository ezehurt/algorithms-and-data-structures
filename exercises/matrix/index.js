// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const matrix = Array(n).fill(0).map(() => Array(n).fill(0));
    
    let count = 1;
    let startingRow = 0
    let endRow = n - 1;
    let startingColumn = 0;
    let endColumn = n - 1;

    while (startingColumn <= endColumn && startingRow <= endRow) {

        //TOP ROW
        for (let i = startingColumn; i <= endColumn; i++) {
            matrix[startingRow][i] = count;
            count = count + 1
        }
        startingRow = startingRow + 1;

        // RIGHT COLUMN
        for (let i = startingRow; i <= endRow; i++) {
                matrix[i][endColumn] = count;
                count = count + 1
        }

        endColumn = endColumn - 1;

        //BOTTOM ROW
        for (let i = endColumn; i >= startingColumn; i--) {
                matrix[endRow][i] = count;
                count = count + 1;
        }
        endRow = endRow - 1;

        // LEFT COLUMN

        for (let i = endRow ; i >= startingRow; i--) {
            if ( matrix[i][startingColumn] === 0) {
                matrix[i][startingColumn] = count;
                count = count + 1
            }
        }
        startingColumn = startingColumn + 1;

    }
    for (let arr of matrix) {
        console.log(arr)
    }
    return matrix;
}
matrix(5)
module.exports = matrix;

// EJHF Solution 1
// function matrix(n) {
//     const matrix = Array(n).fill(0).map(() => Array(n).fill(0));
    
//     let count = 1;
//     let startingRow = 0
//     let endRow = n - 1;
//     let startingColumn = 0;
//     let endColumn = n - 1;

//     while (startingColumn <= endColumn && startingRow <= endRow) {

//         for (let j = 0; j < n; j++) {
//             if ( matrix[startingRow][j] === 0) {
//                 matrix[startingRow][j] = count;
//                 count = count + 1
//             }
//         }
//         for (let i = 0; i < n; i++) {
//             if ( matrix[i][endColumn] === 0) {

//                 matrix[i][endColumn] = count;
//                 count = count + 1
//             }
//         }

//         for (let i = n; i > 0; i--) {
//             if ( matrix[endRow][i] === 0) {

//                 matrix[endRow][i] = count;
//                 count = count + 1;
//             }
//         }
//         for (let i = n-1 ; i > 0; i--) {
//             if ( matrix[i][startingColumn] === 0) {
//                 matrix[i][startingColumn] = count;
//                 count = count + 1
//             }
//         }
//         startingColumn = startingColumn + 1;
//         endColumn = endColumn - 1;
//         startingRow = startingRow + 1;
//         endRow = endRow - 1;

//     }
//     for (let arr of matrix) {
//         console.log(arr)
//     }
//     return matrix;
// }