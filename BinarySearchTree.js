const Queue = require('./Queue');

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    insert(key, value) {
        //if the tree is empty, make this the root
        if (this.key === null) {
            this.key = key
            this.value = value
        }
        //compare to the inserted key. if less, insert left.
        else if (key < this.key) {
            //if no left child, insert as left child
            if (this.left === null) {
                this.left = new BinarySearchTree(key, value, this)
            }
            //if existing left child, call insert again to move down tree
            else {
                this.left.insert(key, value)
            }
        }
        //if  key is greater, proceed on right side
        else {
            if (this.right === null) {
                this.right = new BinarySearchTree(key, value, this)
            }
            else {
                this.right.insert(key, value)
            }
        }
    }
    remove(key) {
        //if we are removing a parent
        if (this.key === key) {
            //we have both left and right children
            if (this.left && this.right) {
                const successor = this.right._findMin()
                this.key = successor.key
                this.value = successor.value
                successor.remove(successor.key)
            }
            //we only have a left child
            else if (this.left) {
                this._replaceWith(this.left)
            }

            //we only have a right child
            else if (this.right) {
                this._replaceWith(this.right)
            }
            //we have no further children
            else {
                this._replaceWith(null)
            }
        }
        //key is less than the parent and there is a left child
        else if (key < this.key && this.left) {
            this.left.remove(key)
        }
        //key is more than the parent and there is a right child
        else if (key > this.key && this.right) {
            this.right.remove(key)
        }
        //no match
        else {
            return 'key not found'
        }
    }
    find(key) {
        //if item is root, return root
        if (this.key === key) {
            return this.value
        }
        //if less than root and there is a left child, follow left branch
        else if (key < this.key && this.left) {
            return this.left.find(key)
        }
        //if more than root and there is a right child, follow right branch
        else if (key > this.key && this.right) {
            return this.right.find(key)
        }
        else {
            return 'key not found'
        }
    }

    _replaceWith(node) {
        //if has children
        if (this.parent) {
            //if has a left child
            if (this === this.parent.left) {
                this.parent.left = node
            }
            //if has right child
            else if (this === this.parent.right) {
                this.parent.right = node
            }
            if (node) {
                node.parent = this.parent
            }
        }
        else {
            if (node) {
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.right
            }
            else {
                this.key = null
                this.value = null
                this.left = null
                this.right = null
            }
        }
    }
    _findMin() {
        if (!this.left) {
            return this
        }
        return this.left._findMin()
    }

    inOrderTraversal(values = []) {
        if (this.left) {
            values = this.left.inOrderTraversal(values);//left branch
        }
        values.push(this.value);//node

        if (this.right) {
            values = this.right.inOrderTraversal(values);//right branch
        }
        return values;
    }

    preOrderTraversal(values = []) {
        values.push(this.value);//node

        if (this.left) {
            values = this.left.preOrderTraversal(values);//left branch
        }

        if (this.right) {
            values = this.right.preOrderTraversal(values);//right branch
        }
        return values;
    }

    postOrderTraversal(values = []) {
        if (this.left) {
            values = this.left.postOrderTraversal(values);//left branch
        }

        if (this.right) {
            values = this.right.postOrderTraversal(values);//right branch
        }

        values.push(this.value);//node
        return values;
    }
    breadFirstTraversal(values = []) {
        const queue = new Queue();
        const node = this;

        queue.enqueue(node)

        while (queue.first !== null) {
            const node = queue.dequeue()
            values.push(node.value)

            if (node.left) {
                queue.enqueue(node.left)
            }
            if (node.right) {
                queue.enqueue(node.right)
            }
        }
        return values
    }

}

module.exports = BinarySearchTree