// Работа с прототипами
// const person = {
//   name: 'Mikle',
//   age: 25,
//   greet: function () {
//     console.log('Greet!')
//   }
// }

// Object.prototype.sayHello = function () {
//   console.log('Hello!')
// }

// Работа с this, call, bind, apply
// Array.prototype.multBy = function (n) {
//   return this.map((num) => num * n)
// }

// const array = [1, 2, 3, 4]

// Замыкания
// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')
// console.log(comUrl('google'))

// myBind = function (context, fn) {
//   return function (...args) {
//     fn.apply(context, args)
//   }
// }

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = { name: 'Mikle', age: 21, job: 'PM' }
// const person2 = { name: 'Jon', age: 22, job: 'Programmer' }

// myBind(person1, logPerson)()
// myBind(person2, logPerson)()


const mikle = {
  name: 'Mikle',
  age: 41
}

const kira = {
  name: 'Kira',
  age: 3
}

Object.prototype.helloName = function (name) {
  const name = new Object
  console.log(`Hello ${this.name}`)
}

