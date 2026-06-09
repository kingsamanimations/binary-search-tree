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
        this.inputArray = [...removeDuplicates(mergeSort(inputArray))];
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
        console.log("Print tree in order: ", `${this.inOrderData}`);
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
        console.log("Print tree pre-orderd: ", `${this.preOrderData}`);
    
    }

    postOrderForEach(root = this.root) {
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
        console.log("Print tree post-ordered: ", `${this.postOrderData}`);
    
    }
    
    height(root = this.root) {
        if (root == null) {
            return -1;
        } else {
            let left = this.height(root.left);
            let right = this.height(root.right);

            return Math.max(left, right) + 1;
        }
    }

    depth(nodeVal, root = this.root, edgeCount = 0) {
        if (root ===  null) return;
        if (root.data === nodeVal) return edgeCount;

        if (root.data < nodeVal) {
            return this.depth(nodeVal, root.right, (edgeCount + 1));
        } else {
            return this.depth(nodeVal, root.left, (edgeCount + 1));
        }
    }

    isBalanced(root = this.root) {
        if (root === null) return undefined;

        let lefthalf = root.left;
        let righthalf = root.right;

        if (Math.abs(this.height(lefthalf) - this.height(righthalf) > 1)) {
            return false;
        } else {
            return true;
        }
    }

    rebalance() {
        prettyPrint(this.root);
        if(this.isBalanced(this.root)) return this.root;

        let balancedArray = [];
        balancedArray = this.traverse(this.root, balancedArray);

        let balancedTree = new Tree(balancedArray);
        prettyPrint(balancedTree.root);
        console.log("Is tree balanced? ", balancedTree.isBalanced());
        return balancedTree.root;
    }

    // Traversal for rebalance. To provide a new array
    traverse(root, array) {
        if (array != undefined) array.push(root.data);
        if (root.left !== null) {
            this.traverse(root.left, array);
        }
        if (root.right !== null) {
            this.traverse(root.right, array);
        }
        return array;
    }
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

// Functions for removing duplicates
function removeDuplicates(inputArray) {
    return [...new Set(inputArray)];
}

function mergeSort(inputArray) {
    if (inputArray.length == 1) return inputArray;

    const newArray = [];

    const left = mergeSort(inputArray.slice(0, inputArray.length / 2));
    const right = mergeSort(inputArray.slice(inputArray.length / 2));

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            newArray.push(left.shift());
        } else {
            newArray.push(right.shift());
        }

        return [...newArray, ...left, ...right];
    }
}
// functions end here

// Tie it all together
let arrayTest = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
balanced = new Tree (arrayTest, 1, 7);
balanced.insert(56);
balanced.insert(78);
balanced.insert(100);
balanced.preOrderForEach();
balanced.inOrderForEach();
balanced.postOrderForEach();
console.log("Height: ", balanced.height()); //Logs 5
console.log("depth: ", balanced.depth(7)); // Logs 3
console.log("Tree balanced? ", balanced.isBalanced());
console.log("Re-balance tree: ", balanced.rebalance());
