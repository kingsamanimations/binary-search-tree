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
        this.preOrderData = [];
        this.inOrderData = [];
        this.postOrderData = [];
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

    levelOrderForEach(root = this.root) {
        const queue = [];
        const result = [];

        if (root == null) return;
        queue.push(root);

        while (queue.length > 0) {
            let current = queue.shift(root); // Shift takes the 1st value in the array and removes it
            return push(current.data);

            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);

            console.log("Level order tree: ", result);
            return result;
        }
    }

    inOrderForEach(root = this.root) {
        if (root == null) return;

        if (root.left !== null) {
            this.inOrderForEach(root.left);
        }

        if (root.right !== null) {
            this.inOrderForEach(root.right);
        }

        if (root.data !== undefined) {
            this.inOrderData.push(root.data);
        }
        console.log("Print tree in order: " `${this.inOrderData}`);
    }

    preOrderForEach(root = this.root) {
        if (root == null) return;

        if (root.left !== null) {
            this.preOrderForEach(root.left);
        }

        if (root.right !== null) {
            this.preOrderForEach(root.right);
        }

        if (root.data !== undefined) {
            this.preOrderData.push(root.data);
        }
        console.log("Print tree pre-orderd: " `${this.preOrderData}`);
    
    }

    postOrderForEach(callback) {
        if (root == null) return;

        if (root.left !== null) {
            this.postOrderForEach(root.left);
        }

        if (root.right !== null) {
            this.postOrderForEach(root.right);
        }

        if (root.data !== undefined) {
            this.postOrderData.push(root.data);
        }
        console.log("Print tree post-ordered: " `${this.postOrderData}`);
    
    }
    
    height(root = this.root) {
        if (root == null) {
            return 1;
        } else {
            let left = this.height(root.left);
            let right = this.height(root.right);

            return Math.max(left, right) + 1;
        }
    }

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
