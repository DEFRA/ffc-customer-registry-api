import { graphql } from 'graphql'

import { schema } from '../../../app/graphql/server.js'
import { context } from '../../../app/graphql/context.js'

import { ruralPaymentsPortalCustomerTransformer } from '../../../app/transformers/rural-payments-portal/customer.js'
import { person as personFixture } from '../../../mocks/fixtures/person.js'
import {
  transformOrganisationCSApplicationToBusinessApplications
} from '../../../app/transformers/rural-payments-portal/index.js'
import {
  organisationCSApplications as organisationCSApplicationsFixture
} from '../../../mocks/fixtures/organisation.js'

describe('Query.customer', () => {
  it('should return customer data', async () => {
    const transformedPerson = ruralPaymentsPortalCustomerTransformer(personFixture)
    const transformedOrganisationCSApplications = transformOrganisationCSApplicationToBusinessApplications(organisationCSApplicationsFixture)

    const result = await graphql({
      source: `#graphql
        query Customer {
          customer(id: "5090008") {
            id
            info {
              name {
                title
                otherTitle
                first
                middle
                last
              }
              dateOfBirth
              phone {
                mobile
                landline
                fax
              }
              email {
                address
                validated
                doNotContact
              }
              status {
                locked
                confirmed
                deactivated
              }
              address {
                pafOrganisationName
                buildingNumberRange
                buildingName
                flatName
                street
                city
                county
                postalCode
                country
                uprn
                dependentLocality
                doubleDependentLocality
                typeId
              }
            }
            businesses {
              applications {
                applicationStatus {
                  id
                  open
                  status
                  type
                  sector
                  year
                  FRN
                  office
                }
                csClaims {
                  schemeYear
                  type
                  status
                  lastMovement
                }
              }
            }
          }
        }
      `,
      variableValues: {
        customerId: '5090008'
      },
      schema,
      contextValue: await context()
    })

    expect(result).toEqual({
      data: {
        customer: JSON.parse(JSON.stringify({ ...transformedPerson, businesses: [transformedOrganisationCSApplications] }))
      }
    })
  })
})
