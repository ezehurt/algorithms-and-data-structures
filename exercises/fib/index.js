// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     if(n === 0 || n === 1){
//         return n;
//     }
//     let prev = 0;
//     let current = 1;
//     let sum = 0;
//     for(let i = 1; i < n; i ++) {
//         sum = current + prev;
//         prev = current;
//         current = sum;

//     }
//     return current;
// }

const memoize = (fn) =>{
    const cache = {};
    return function (...args) {
        if(cache[args]) {
            return cache[args];
        } else {
            result = fn.apply(this,args);
            cache[args] = result;
            return result
        }
    }
}

function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

fib = memoize(fib);
const ret = fib(4);
const arr = [];
for(let i = 0 ; i < 10; i++){
    arr.push(fib(i));
}
console.log("arr",arr)
module.exports = fib;

