// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, line = '') {
    if(n === row) {
        return;
    }
    const lineLength = (n * 2) - 1;
    if(line.length === lineLength){
        console.log(line)
        pyramid(n, row +1)
        return;
    }
    let add = ''
    const middlePoint = Math.floor(lineLength / 2);
    if(line.length > (middlePoint + row) || line.length < (middlePoint - row)) {
        add = " "
    } else {
        add = '#'
    }
  
    pyramid(n,row, line + add)
}

pyramid(3);

module.exports = pyramid;
