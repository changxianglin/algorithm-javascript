const log = console.log.bind(console)

log('...start...')

function increment(num) {
  return ++num
}

function sequentialSearch(array, item) {
  // v1
  // for (var i = 0; i < array.length; i++) {
  //   if (item === array[i]) {
  //     return i
  //   }
  // }
  // return -1

  // v2
  // var cost = 0
  // for (var i = 0; i < array.length; i++) {
  //   cost++
  //   if (item === array[i]) {
  //     return i
  //   }
  // }
  // log('cost for sequentialSearch with input size ' + array.length + ' is ' + cost)
  // return -1
}

// sequentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

function swap(array, index1, index2) {
  var aux = array[index1]
  array[index1] = array[index2]
  array[2] = aux
}

function bubbleSort(array) {
  var length = array.length
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j+1)
      }
    }
  }
}