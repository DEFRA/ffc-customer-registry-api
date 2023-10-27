import { deepEqual } from 'assert'

import { graphql } from 'graphql'
import { faker } from '@faker-js/faker/locale/en_GB'

import { schemaWithMocks as schema } from '../../app/graphql/server.js'

const source = `#graphql
query CustomerMockTest($referenceNumber: ID!) {
  customer(referenceNumber: $referenceNumber) {
    address {
      buildingName
      buildingNumberRange
      city
      country
      county
      dependentLocality
      doubleDependentLocality
      flatName
      line1
      line2
      line3
      line4
      line5
      pafOrganisationName
      postalCode
      street
      typeId
      uprn
    }
    authenticationQuestions {
      memorableDate
      memorableEvent
      memorablePlace
    }
    dateOfBirth
    email {
      address
      doNotContact
      validated
    }
    name {
      first
      last
      middle
      otherTitle
      title
    }
    phone {
      fax
      landline
      mobile
    }
    referenceNumber
    status {
      confirmed
      deactivated
      locked
    }
  }
}
`

describe('Query.customer', () => {
  beforeEach(() => {
    faker.seed(7209369705577748)
  })

  it('should return customer mock', async () => {
    deepEqual(
      await graphql({
        schema,
        source,
        variableValues: {
          referenceNumber: 'crn'
        }
      }),
      {
        data: {
          customer: {
            address: {
              buildingName: 'Suite 510',
              buildingNumberRange: 'Apt. 512',
              city: 'West Metzdon',
              country: 'Guadeloupe',
              county: 'Northern Ireland',
              dependentLocality: null,
              doubleDependentLocality: null,
              flatName: 'Suite 631',
              line1: '682 Joanne Road',
              line2: null,
              line3: null,
              line4: null,
              line5: null,
              pafOrganisationName: null,
              postalCode: 'PG78 3LS',
              street: 'Westgate',
              typeId: null,
              uprn: null
            },
            authenticationQuestions: {
              memorableDate:
                'Suscipio xiphias cogito ver alter amiculum ipsam campana cursim vestrum.',
              memorableEvent:
                'Caste comparo eaque adimpleo nobis libero quasi uter eveniet xiphias.',
              memorablePlace:
                'Aperiam desparatus adnuo tabella temptatio vado triumphus cupiditate ante audax.'
            },
            dateOfBirth: '8',
            email: {
              address: 'Sierra_Luettgen@gmail.com',
              doNotContact: false,
              validated: false
            },
            name: {
              first: 'Cameron',
              last: 'Bernhard',
              middle: 'Kyle',
              otherTitle: 'Mrs.',
              title: 'Miss'
            },
            phone: {
              fax: '016977 4966',
              landline: '01261 067502',
              mobile: '01449 09397'
            },
            referenceNumber: 'N5CTZ0CKL9',
            status: {
              confirmed: true,
              deactivated: false,
              locked: true
            }
          }
        }
      }
    )
  })
})
