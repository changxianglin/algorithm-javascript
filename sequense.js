const log = console.log.bind(console)

log('...start...')

function ArrayList() {
  var array = []

  this.insert = function (item) {
    array.push(item)
  }

  this.toString = function () {
    return array.join()
  }

  var swap = function (array, index1, index2) {
    var aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }
  
  this.bubbleSort = function () {
    var length = array.length
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j+1)
        }
      }
    }
  }

  this.modifiedBubbleSort = function () {
    var length = array.length
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j+1)
        }
      }
    }
  }

  this.selectionSort = function () {
    var length = array.length,
      indexMin;
    for (var i = 0; i < length - 1; i++) {
      indexMin = i
      for (var j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j
        }
      }
    }
    if (i !== indexMin) {
      swap(i, indexMin)
    }
  }

  
}

function createNonSortedArray(size) {
  var array = new ArrayList()
  for (var i = size; i > 0; i--) {
    array.insert(i)
  }
  return array
}

// var array = createNonSortedArray(5)
// log(array.toString())
// array.bubbleSort()
// log(array.toString())

var array = createNonSortedArray(5)
log(array.toString())
array.selectionSort()
log(array.toString())