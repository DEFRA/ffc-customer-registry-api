const Person = require('../../core/person/person')

module.exports = {
    Query: {
        Person: () => ((new Person("John", "Doe")).toJSON()),
    },
}
