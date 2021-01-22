/*** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
*/

//14 19 15 27 25 35 79 90 89 91

const BinarySearchTree = require('./BinarySearchTree')
const BST = new BinarySearchTree()

//let nums = [35, 25, 89, 15, 27, 79, 91, 14, 19, 90]//post order: 14 19 15 27 25 79 90 91 89 35
let nums = [8,6,10,5,9,11,7]//pre order: 8 6 5 7 10 9 11
nums.map(num => BST.insert(num, num))

console.log(BST.inOrderTraversal())
console.log(BST.preOrderTraversal())
console.log(BST.postOrderTraversal())
