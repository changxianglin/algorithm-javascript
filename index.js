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