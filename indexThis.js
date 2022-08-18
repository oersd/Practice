// Работа с this, call, bind, apply
myBind = function (context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'Mikle', age: 21, job: 'PM' }
const person2 = { name: 'Jon', age: 22, job: 'Programmer' }

// myBind(person1, logPerson)()
// myBind(person2, logPerson)()