// Работа с прототипами
const person = {
  name: 'Mikle',
  age: 25,
  greet: function () {
    console.log('Greet!')
  }
}

Object.prototype.sayHello = function () {
  console.log('Hello!')
}

// Работа с prototype and this
Array.prototype.multBy = function (n) {
  return this.map((num) => num * n)
}

const array = [1, 2, 3, 4]