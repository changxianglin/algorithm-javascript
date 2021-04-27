const log = console.log.bind(console)
log('...start...')

// BST 
function BinarySearchTree() {
  var Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  var root = null

  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.insert = function (key) {
    var newNode = new Node(key)

    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback)
  }

  var perOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      perOrderTraverseNode(node.left, callback)
      perOrderTraverseNode(node.right, callback)
    }
  }

  this.perOrderTraverse = function (callback) {
    perOrderTraverseNode(root, callback)
  }

  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }

  var minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }

      return node.key
    }
    return null
  }

  this.min = function () {
    return minNode(root)
  }

  var maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }

      return node.key
    }

    return null 
  }

  this.max = function () {
    return maxNode(root)
  }

  var searchNode = function(node, key) {
    if (node === null) {
      return false
    }

    if (key < node.key) {
      return searchNode(node.left, key)
    } else if (key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }

  this.search = function (key) {
    return searchNode(root, key)
  }

  var findMinNode = function (node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
  
  var removeNode = function (node, key) {
    if (node === null) {
      return null 
    }

    if (key < node.key) {
      node.left = removeNode(node.left, key)
      return node 
    } else if (key > node.key) {
      node.right = removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node 
      }

      var aux = findMinNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }

  this.remove = function (key) { root = removeNode(root, key) }
}

var tree = new BinarySearchTree();
tree.insert(11);

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6)

function printNode(value) {
  log(value)
}

tree.inOrderTraverse(printNode)

log('---')

tree.perOrderTraverse(printNode)

log('---')

tree.postOrderTraverse(printNode)

log('min')
log(tree.min())

log('max')
log(tree.max())

log('search')
log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found')
log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found')