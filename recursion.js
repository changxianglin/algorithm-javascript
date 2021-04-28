const log = console.log.bind(console)

log('...start...')

// function recursiveFunction(someParam) {
//   removeAllListeners(someParam)
// }

// var i = 0
// function recursiveFn() {
//   i++
//   recursiveFn()
// }

// try {
//   recursiveFn()
// } catch (ex) {
//   log('i = ' + i + ' error: ' + ex)
// }

function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

// log(fibonacci(3)) // 2

function fib(num) {
  var n1 = 1,
    n2 = 1,
    n = 1
  for (var i = 3; i <= num; i++) {
    n = n1 + n2
    n1 = n2
    n2 = n
  }
  return n
}

// log(fib(3)) // 2

var printArray = function (array) {
  for (var i = 0; i < array.length; i++) {
    log(array[i])
  }
}

// printArray([1, 2, 3, 4, 5, 6])

// how
var logItem = function (item) {
  log(item)
}

// how
var forEach = function (array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i])
  }
}

// forEach([1, 2, 3, 4, 5], logItem) // what 


var findMinArray = function (array) {
  var minVavlue = array[0]
  for (var i = 1; i < array.length; i++) {
    if (minVavlue > array[i]) {
      minVavlue = array[i]
    }
  }
  return minVavlue
}

// log(findMinArray([8, 6, 4, 5, 9]))

const min_ = function (array) {
  return Math.min(...array)
}

// log(min_([8, 6, 4, 5, 9]))

const min = arr => Math.min(...arr)

// log(min([8, 6, 4, 5, 9]))

var daysOfWeek = [
  { name: 'Monday', value: 1 },
  { name: 'Tuesday', value: 2 },
  { name: 'Wednesday', value: 7 },
]

var daysOfWeek_ = []
for (var i = 0; i < daysOfWeek.length; i++) {
  daysOfWeek_.push(daysOfWeek[i].value)
}

// log(daysOfWeek_)

var daysOfWeekValues = daysOfWeek.map(function (day) {
  return day.value
})

// log(daysOfWeekValues)

const sum = arr => arr.reduce((a, b) => a + b)
log(sum([1, 2, 3, 4, 5]))