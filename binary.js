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

    buildTree(array) {
        return inputArray(array, 0, array.length -1);
    }

    includes(value) {}

    insert(value, root = this.root) {
        if (root == null) {
            return (root = new node(value));
        }

        if (root.data < value) {
            root.right = (this.insert(value, root.right));
        } else {
            root.left = (this.insert(value, root.left));
        }
        prettyPrint(this.root);
        return root;
    }

    deleteItem(value, root = this.root) {
        if (root == null) {
            return root;
        }

        if (root.data > value) {
            root.left = (this.insert(value, root.left));
        } else if (root.data < value) {
            root.right = (this.insert(value, root.right));
        } else {
            if(root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }
            root.data = minValue(root);
            root.right = this.deleteItem(root.right, root.data);
        }
        prettyPrint(this.root);
        return root;
    }

    levelOrderForEach(callback) {}

    inOrderForEach(callback) {}

    preOrderForEach(callback) {}

    postOrderForEach(callback) {}
    
    height(value) {}

    depth(value) {}

    isBalanced() {}

    rebalance() {}
}

// Function to make root min and data equal data and left, as long as root isn't null
function minValue(root) {
    let min = root.data;
    while (root != null) {
        min = root.data;
        root = root.left;
    }
    prettyPrint(this.root);
    return min;
}; 

let arrayTest = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
balanced = new Tree (arrayTest, 1, 7);
