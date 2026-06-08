// Console tree in structured format
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  // To display diagram
  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

class node {
    constructor (data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    buildTree(array) {
        return inputArray(array, 0, array.length -1);
    }

    includes(value) {}

    insert(value) {}

    deleteItem(value) {}

    levelOrderForEach(callback) {}

    inOrderForEach(callback) {}

    preOrderForEach(callback) {}

    postOrderForEach(callback) {}
    
    height(value) {}

    depth(value) {}

    isBalanced() {}

    rebalance() {}
}

class Tree {
    constructor(inputArray) {
        this.root = this.buildTree(
            inputArray,
            0,
            inputArray.length - 1
        );
        prettyPrint(this.root);
    }

    buildTree(inputArray, start, end) {
        if (start > end) return null;

        let mid = Math.floor((start + end) / 2);
        let root = new node(inputArray[mid]);

        // Divide from middle element
        root.left = this.buildTree(inputArray, start, mid - 1);
        root.right = this.buildTree(inputArray, mid + 1, end);

        return root;
    }
}

let arrayTest = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
balanced = new Tree (arrayTest, 1, 7);
