// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, line = '') {

    if (n === row) {
        return;
    }
    if (n === line.length) {
        console.log(line);
        steps(n, row + 1);
        return;
    }
    const charToAdd = line.length <= row ? "#": " ";
    steps(n, row, line + charToAdd);
}
steps(10)
module.exports = steps;

// EJHF Solution 1

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         let step = "#"
//         let space;
//         for (let j = 1; j < i; j++) {
//             step = step + "#";
//         }
//         for (let k = i + 1; k <= n; k++) {
//             space = space ? space + " " : " ";
//         }
//         console.log(`${step}${space ? space : ''}`)
//     }
// }

// EJHF Solution 2
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let line = "#";
//         // Always the first character will be a #. So we added to the line to print and start the next loop with +1
//         for(let column = 1; column < n; column++){
//             if(column <= row) {
//                 line = line + "#"
//             } else {
//                 line = line + " "
//             }
//         }
//        console.log(line)
//     }
// }

//EJHF Solution 3 (Recursion step 1)
// function steps(n, row = 0) {

//     if(n === row){
//          return;
//     } else {
//       let line = ''
//       for(let column = 0; column < n; column++) {
//          if(column <= row){
//              line = line + "#";
//          } else {
//              line = line + " "
//          }
//       }
//       console.log(line)
//       steps(n, row + 1)
//     }
//  }


// Solution 1
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let line = "";
//         for(let column = 0; column < n; column++){
//             if(column <= row) {
//                 line = line + "#"
//             } else {
//                 line = line + " "
//             }
//         }
//        console.log(line)
//     }
// }