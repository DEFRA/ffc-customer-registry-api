function Person (firstName, surname) {
  this.firstName = firstName
  this.surname = surname
}

Person.prototype.toJSON = function () {
  return {
    firstName: this.firstName,
    surname: this.surname,
  }
}

module.exports = Person

