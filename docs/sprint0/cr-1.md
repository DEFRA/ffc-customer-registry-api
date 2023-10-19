# Create GraphQL Query Resolver for Person
These series of tickets created as part of GraphQL API endpoint to be consumed by Power Apps.

## Overview
As part of authentication we require an endpoint to verify caller's identity.


## Requirements
Created a new query resolver to retrieve mocked data model for Person inside API Documentation.

__Query__
```graphql
query Person($personId: ID!) {
    Person(personId: $personId) {
        AuthorisationQuestions {
            memorableDate
            memorable...
        }
    }
}
```

__Variables__
```json
{
  "personId": 32323213
}
```

## High-Level Tasks
* [ ] Create a new person type inside `graphql/types`
* [ ] Create a new resolver `Person(personId: ID!): Person` for person inside `graphql/resolvers`
* [ ] Create an additional schema name `AuthorisationQuestions` for person inside `graphql/types/person.gql` <small>_(AuthorisationQuestions is an example name, please pick any key you see fit)_</small>

```graphql
enum PersonTitle {
    Mr
    Ms
    Miss
    Mrs
}

scalar Timestamp

type AuthorisationQuestions {
    memorableDate: Timestamp
    memorablePlace: String
    memorableName: String
    memorable...: String
}

type Person {
    title: PersonTitle
    firstName: String!
    middleName: String!
    lastName: String!
    ...
    AuthorisationQuestions: AuthorisationQuestions
}
```

 * [ ] Create a Unit Test for GraphQL resolver inside `test/unit/graphql/resolver/person.test.js` to verify Schema and response for new `Authorisation` key
