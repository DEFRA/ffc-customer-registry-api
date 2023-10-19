# Create a Power App UI for Authentication
These series of tickets created as part of Power Apps components that consumes GraphQL API

## Overview
As part of authentication we require an endpoint to verify caller's identity.

Query example via GraphQL API:

__Header__
```text
POST /graphql HTTP/1.1
Host: localhost
Content-Type: application/json
```

__Payload:__
```json

{
    "query": "query Person($personId: ID!) {Person(personId: $personId) {authorizationQuestions{memorableDate}}}",
    "variables": {
        "personId": 131431
    }
}
```

__Payload:__
```json

{
    "query": "query Organisation($organisationId: ID!) {Organisation(organisationId: $organisationId) {persons {AuthorisationQuestions { memorableDate }}}}",
    "variables": {
        "organisationId": 11232
    }
}
```


## Requirements
Create a user interface to query caller's identity by organisation `sbi` or customer reference 


## High-Level Tasks
* [ ] Create a search input for `sbi` or customer reference
* [ ] Create two page for:
  * [ ] Displaying authentication questions
  * [ ] Displaying list of people associated to the organisations
