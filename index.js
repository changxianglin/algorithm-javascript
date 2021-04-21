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


