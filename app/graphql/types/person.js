module.exports =`
type PersonResponse {
    name: String!
}

extend type Query {
    Person(personId: Int!): PersonResponse!
}`
