# Create GraphQL Query Resolver for Organisation
These series of tickets created as part of GraphQL API endpoint to be consumed by Power Apps.

## Overview
As part of authentication we require an endpoint to verify caller's identity. In the scenario where caller provides __SBI__, 
we should list `Person` type from user story `cr-1` from Organisation. 


## Requirements
Created a new query resolver to retrieve mocked data model for Organisation inside API Documentation.

__Query__
```graphql
query Organisation($organisationId: ID!) {
    Organisation(organisationId: $organisationId) {
        name
        sbi
        persons {
            AuthorisationQuestions {
                memorableDate
                memorable...
            }
        }
    }
}

```

__Variables__
```json
{
  "organisationId": 32323213
}
```

## High-Level Tasks
* [ ] Create a new person type inside `graphql/types`
* [ ] Create a new resolver `Organisation(oraginsationId: ID!): Organisation` for person inside `graphql/resolvers`
* [ ] ensure `people: [People]` is populated with list of People mocked from `cr-1`. 

```graphql
scalar Timestamp

type Organisation {
    id: ID!
    name: String!
    sbi: ID!
    ...
    lastUpdatedOn: Timestamp
    persons: [Person]
}
```

* [ ] Create a Unit Test for GraphQL resolver inside `test/unit/graphql/resolver/organisation.test.js` to verify Schema and response `persons` key
