// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, 'l'];
    const levelArr = [0];;
    while (arr.length > 1) {
        const node = arr.shift();
        if(node === 'l'){
            arr.push('l');
            levelArr.push(0);
        } else {
            arr.push(...node.children)
            levelArr[levelArr.length -1]++;
        }
    }
    return levelArr;
}

module.exports = levelWidth;
