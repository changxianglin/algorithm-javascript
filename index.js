const log = console.log.bind(console)

// OOP

// function Book(title, pages, isbn) {
//   this.title = title
//   this.pages = pages
//   this.isbn = isbn
// }

// var book = new Book('title', 'pag', 'isbn')

// log(book.title)
// book.title = 'new title'
// log(book.title)


// Book.prototype.printTitle = function () {
//   log(this.title)
// }

// book.printTitle() // new title


// function Book(title, pages, isbn) {
//   this.title = title
//   this.pages = pages
//   this.isbn = isbn
//   this.printIsbn = function() {
//     log(this.isbn)
//   }
// }

// var book = new Book('title', 'pag', 'isbn')

// book.printIsbn() // isbn


// let l = 'JavaScript'
// let l = 'Ruby!' // error


// open arguments
// function resetParamterFunction(x, y, ...a) {
//   return (x + y ) * a.length
// }

// log(resetParamterFunction(1, 2, 'hello', true, 7)) // 9

// var [x, y] = ['a', 'b']
// var obj = { x, y }
// log(obj)

// var x = 'a'
// var y = 'b'
// var obj2 = { x: x, y: y }
// log(obj2)

// var hello = {
//   name: 'abcedf',
//   printHello() {
//     log('hello')
//   }
// }

// log(hello.printHello()) // hello


// var hello = {
//   name: 'abcedf',
//   printHello: function printHello() {
//     log('hello')
//   }
// }

// log(hello.printHello()) // hello

// class 
// function Book(title, pages, isbn) {
//   this.title = title
//   this.pages = pages
//   this.isbn = isbn
// }
// Book.prototype.printTitle = function () {
//   log(this.title)
// }

// class Book {
//   constructor(title, pages, isbn) {
//     this.title = title
//     this.pages = pages
//     this.isbn = isbn
//   }
//   printIsbn() {
//     log(this.isbn)
//   }
// }

// // let book = new Book('title', 'pages', 'isbn')
// // log(book.title)
// // book.title = 'new title'
// // log(book.title)

// // extends

// class ITBook extends Book {
//   constructor(title, pages, isbn, technology) {
//     super(title, pages, isbn)
//     this.technology = technology
//   }
//   printTechnology() {
//     log(this.technology)
//   }
// }

// let jsBook = new ITBook('learn JS Alogrithm', '200', '1234567890', 'JavaScript')
// log(jsBook.title)
// log(jsBook.printTechnology())

// class Person {
//   constructor(name) {
//     this._name = name
//   }
//   get name() {
//     return this._name
//   }
//   set name(value) {
//     this._name = value
//   }
// }

// let loterChar = new Person('Frodo')
// log(loterChar.name) // Frodo
// loterChar.name = 'Gandalf'
// log(loterChar.name) // Gandalf
// loterChar._name = 'Sam'
// log(loterChar.name) // Sam

// fibonacci
// var fibonacci = []
// fibonacci[1] = 1
// fibonacci[2] = 2

// for (var i = 3; i < 20; i++) {
//   fibonacci[i] = fibonacci[i - 1]  + fibonacci[i - 2]
// }

// for (var i = 1; i < fibonacci.length; i++) {
//   log(fibonacci[i])
// }

// create Stack
// function Stack() {
//   let items = []

//   this.push = function(element) {
//     items.push(element)
//   }

//   this.pop = function () {
//     return items.pop()
//   }

//   this.peek = function () {
//     return items[items.length - 1]
//   }

//   this.isEmpty = function () {
//     return items.length == 0
//   }

//   this.size = function () {
//     return items.length
//   }

//   this.clear = function () {
//     items = []
//   }

//   this.print = function () {
//     log(items.toString())
//   }
// }

// let stack = new Stack()
// log(stack.isEmpty()) // true

// stack.push(5)
// stack.push(8)
// log(stack.peek()) // 8

// stack.push(11)
// log(stack.size()) // 3
// log(stack.isEmpty()) // false

// stack.push(15)

// stack.pop()
// stack.pop()
// log(stack.size()) // 2
// stack.print()

// class Stack
// let _items = Symbol()

// class Stack {
//   constructor() {
//     this[_items] = []
//   }
//   push(element) {
//     this[_items].push(element)
//   }
//   print() {
//     log(this[_items].toString())
//   }
// }

// let stack = new Stack()
// stack.push(5)
// stack.push(8)
// let objectSymbols = Object.getOwnPropertySymbols(stack)
// log(objectSymbols.length) // 1
// log(objectSymbols) // [Symbos()]
// log(objectSymbols[0]) // Symbos()
// stack[objectSymbols[0]].push(1)
// stack.print() // 5, 8, 1

// const items = new WeakMap()

// class Stack {
//   constructor() {
//     items.set(this, {})
//   }
//   push(element) {
//     let s = items.get(this)
//     s.push(element)
//   }
//   pop() {
//     let s = item.geet(this)
//     let r = s.pop()
//     return r
//   }
// }

// create Queue
// function Queue() {
//   let items = []

//   this.enqueue = function(element) {
//     items.push(element)
//   }
//   this.dequeue = function () {
//     return items.shift()
//   }
//   this.front = function () {
//     return items[0]
//   }
//   this.isEmpty = function () {
//     return items.length == 0
//   }
//   this.size = function () {
//     return items.length
//   }
//   this.print = function () {
//     log(items.toString())
//   }
// }

// let queue = new Queue()
// log(queue.isEmpty()) // true

// queue.enqueue('John')
// queue.enqueue('Jack')

// queue.enqueue('Camila')
// queue.print() // John Jack Camaila
// log(queue.size()) // 3
// log(queue.isEmpty()) // false
// queue.dequeue()
// queue.dequeue()
// queue.print() // Camila


// class Queue
// let Queue2 =  (function() {
//   let items = new WeakMap()

//   class Queue2{
//     constructor() {
//       items.set(this, [])
//     }
//     enqueue(element) {
//       let q = items.get(this)
//       q.push(element)
//     }
//     dequeue() {
//       let q = items.get(this)
//       return q.shift()
//     }
//     front() {
//       let q = items.get(this)
//       return q[0]
//     }
//     isEmpty() {
//       let q = items.get(this)
//       return q.length == 0
//     }
//     size() {
//       let q = items.get(this)
//       return q.length
//     }
//     print() {
//       let q = items.get(this)
//       log(q.toString())
//     }
//   }

//   return Queue2
// })()

// let queue = new Queue2()
// log(queue.isEmpty()) // true

// queue.enqueue('John')
// queue.enqueue('Jack')

// queue.enqueue('Camila')
// queue.print() // John Jack Camaila
// log(queue.size()) // 3
// log(queue.isEmpty()) // false
// queue.dequeue()
// queue.dequeue()
// queue.print() // Camila


// function PriorityQueue() {
//   let items = []
//   function QueueElement(element, priority) {
//     this.element = element
//     this.priority = priority
//   }

//   this.enqueue = function(element, priority) {
//     let queueElement = new QueueElement(element, priority)

//     let added = false
//     for (let i = 0; i < items.length; i++) {
//       if (queueElement.priority < items[i].priority) {
//         items.splice(i, 0, queueElement)
//         added = true
//         break
//       }
//     }
//     if (!added) {
//       items.push(queueElement)
//     }
//   }
//   this.print = function () {
//     for (let i = 0; i < items.length; i++) {
//       log(`${items[i].element} - ${items[i].priority}`)
//     }
//   }
// }

// let priorityQueue = new PriorityQueue()
// priorityQueue.enqueue('John', 2)
// priorityQueue.enqueue('Jack', 1)
// priorityQueue.enqueue('Camila', 1)
// priorityQueue.print()


// create LinkedList
// function LinkedList() {
//   let Node = function (element) {
//     this.element = element
//     this.next = null
//   }

//   let length = 0
//   let head = null

//   this.append = function (element) {
//     let node = new Node(element),
//       current
    
//     if (head === null) {
//       head = node
//     } else {
//       current = head
//       while (current.next) {
//         current = current.next
//       }
//       current.next = node
//     }

//     length++

//   }

//   this.insert = function (postion, element) {
//     if (postion >= 0 && postion <= length) {
//       let node = new Node(element),
//         current = head,
//         previous,
//         index = 0
      
//       if (postion === 0) {
//         node.next = current
//         head = node
//       } else {
//         while (index++ < position) {
//           previous = current
//           current = current.next
//         }
//         node.next = current
//         previous.next = node
//       }

//       length++
//       return true
//     } else {
//       return false
//     }
//   }

//   this.removeAt = function (position) {
//     if (position > -1 && position < length) {
//       let current = head,
//         privious,
//         index = 0
//       if (position === 0) {
//         head = current.next
//       } else {
//         while (index++ < position) {
//           privious = current
//           current = current.next
//         }
//         privious.next = current.next
//       }

//       length--
//       return current.element
//     } else {
//       return null 
//     }
//   }

//   this.remove = function (element) {
//     let index = this.indexOf(element)
//     return this.removeAt(index)
//   }

//   this.indexOf = function (element) {
//     let current = head,
//       index = -1
    
//     while (current) {
//       if (element === current.element) {
//         return index
//       }
      
//       index++
//       current = current.next
//     }
//     return -1
//   }

//   this.isEmpty = function (element) {
//     return length === 0
//   }

//   this.size = function () {
//     return length
//   }

//   this.getHead = function () {
//     return head
//   }

//   this.toString = function () {
//     let current = head,
//       string = ''
    
//     while (current) {
//       string += current.element + (current.next ? 'n' : '')
//       current = current.next
//     }

//     return string
//   }

//   this.print = function () {
    
//   }
// }

// let list = new LinkedList()
// list.append(15)
// list.append(10)
// log(list.size()) // 2
// log(list.isEmpty()) // false
// log(list.getHead()) // 
// log(list.toString()) // 15n10
// list.remove(10)
// log(list.size())


// function DoublyLinkedList() {
//   let Node = function (element) {
//     this.element = element
//     this.next = null
//     this.prev = null
//   }

//   let length = 0
//   let head = null
//   let tail = null
  
//   this.insert = function (position, element) {
//     let node = new Node(element),
//       current = head,
//       previous,
//       index = 0
    
//     if (position >= 0 && position <= length) {
//       if (position === 0) {
//         if (!head) {
//           head = head
//           tail = node 
//         } else {
//           nodex.next = current
//           current.prev = node
//           head = node
//         }
//       } else if (position === length) {
//         current = tail
//         current.next = node
//         node.prev = current
//         tail = node 
//       } else {
//         while (index++ < position) {
//           previous = current
//           current = current.next
//         }
//         node.next = current
//         previous.next = node

//         current.prev = node
//         node.prev = previous
//       }

//       length++
//       return true
//     } else {
//       return false 
//     }
//   }

//   this.removeAt = function (position) {
//     if (position > -1 && position < length) {
//       let current = head,
//         previousm,
//         index = 0
      
//       if (position === 0) {
//         head = current.next
//         if (length === 1) {
//           tail = null 
//         } else {
//           head.prev = null 
//         }
//       } else if (position === length - 1) {
//         current = tail
//         tail = current.prev
//         tail.next = null
//       } else {
//         while (index++ < position) {
//           previous = current
//           current = current.next
//         }

//         previous.next = current.next
//         current.next = previous
//       }

//       length--
//       return current.element
      
//     } else {
//       return null
//     }
//   }
// }

// create Set
// function Set() {
//   let items = {}

//   this.has = function (value) {
//     return items.hasOwnProperty(value)
//   }

//   this.add = function (value) {
//     if (!this.has(value)) {
//       items[value] = value
//       return true
//     }
//     return false
//   }

//   this.remove = function (value) {
//     if (this.has(value)) {
//       delete items[value]
//       return true
//     }
//     return false
//   }

//   this.clear = function () {
//     items = {}
//   }

//   this.size = function () {
//     return Object.keys(items).length
//   }

//   this.values = function () {
//     let values = []
//     for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
//       values.push(items[keys[i]])
//     }
//     return values
//   }

//   this.union = function (otherSet) {
//     let unionSet = new Set()

//     let values = this.values()
//     for (let i = 0; i < values.length; i++) {
//       unionSet.add(values[i])
//     }

//     values = otherSet.values()
//     for (let i = 0; i < values.length; i++) {
//       unionSet.add(values[i])
//     }
    
//     return unionSet
//   }

//   this.intersection = function (otherSet) {
//     let intersectionSet = new Set()

//     let values = this.values()
//     for (let i = 0; i < values.length; i++) {
//       if (otherSet.has(values[i])) {
//         intersectionSet.add(values[i])
//       }
//     }

//     return intersectionSet
//   }

//   this.difference = function(otherSet) {
//     let differenceSet = new Set()

//     let values = this.values()
//     for (let i = 0; i < values.length; i++) {
//       if (!otherSet.has(values[i])) {
//         differenceSet.add(values[i])
//       }
//     }

//     return differenceSet
//   }

//   this.subset = function (otherSet) {
//     if (this.size() > otherSet.size()) {
//       return false
//     } else {
//       let values = this.values()
//       for (let i = 0; i < values.length; i++) {
//         if (!otherSet.has(values[i])) {
//           return false
//         }
//       }
//       return true
//     }
//   }
// }

// let set = new Set()
// set.add(1)
// set.add(2)
// log(set.size()) // 2
// log(set.values()) //  [1, 2]
// log(set.has(1)) // true
// log(set.remove(1)) // true
// log(set.values()) // [2]

// let setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)

// let setB = new Set()
// setB.add(3)
// setB.add(4)
// setB.add(5)
// setB.add(6)

// let unionAB = setA.union(setB)
// log(unionAB.values()) // [1, 2, 3, 4, 5, 6]

// let setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)

// let setB = new Set()
// setB.add(2)
// setB.add(3)
// setB.add(4)

// let intersectionAB = setA.intersection(setB)
// log(intersectionAB.values()) // [2, 3]

// let setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)

// let setB = new Set()
// setB.add(2)
// setB.add(3)
// setB.add(4)

// let intersectionAB = setA.difference(setB)
// log(intersectionAB.values()) // [1]

// let setA = new Set()
// setA.add(1)
// setA.add(2)


// let setB = new Set()
// setB.add(1)
// setB.add(2)
// setB.add(3)

// let setC = new Set()
// setC.add(2)
// setC.add(3)
// setC.add(4)

// log(setA.subset(setB)) // true
// log(setA.subset(setC)) // false 

// let set = new Set()
// set.add(1)
// log(set.values()) // @iterator
// log(set.has(1)) // true
// log(set.size) // 1

// let setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)


// let setB = new Set()
// setB.add(1)
// setB.add(2)
// setB.add(3)

// let unionAb = new Set()
// for (let x of setA) unionAb.add(x)
// for (let x of setB) unionAb.add(x)