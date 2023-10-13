const { person } = require('../../core/person/person')

function personHandler(parent, args, context) {
    console.log('parent', parent)
    console.log('args', args)
    console.log('context', context)

    return person
}

module.exports = {
    Query: {
        Person: personHandler,
    },
}
