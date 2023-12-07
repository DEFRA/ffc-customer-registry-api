import { graphql } from 'graphql'

import { schema } from '../../../app/graphql/server.js'
import { context } from '../../../app/graphql/context.js'
import {
  transformOrganisationToBusiness,
  transformOrganisationCSApplicationToBusinessApplications
} from '../../../app/transformers/rural-payments-portal'
import {
  organisation as organisationFixture,
  organisationCSApplications as organisationCSApplicationsFixture,
} from '../../../mocks/fixtures/organisation.js'


describe('Query.customer', () => {
  it('should return business data', async () => {
    const transformedOrganisation = transformOrganisationToBusiness(organisationFixture)
    const transformedOrganisationCSApplications = transformOrganisationCSApplicationToBusinessApplications(organisationCSApplicationsFixture)

    const result = await graphql({
      source: `#graphql
        query Business {
          business(id: "5444918") {
            id
            info {
              sbi
              name
              reference
              vat
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
              legalStatus {
                code
                type
              }
              type {
                code
                type
              }
              registrationNumbers {
                companiesHouse
                charityCommission
              }
            }
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
      `,
      variableValues: {
        customerId: '5090008'
      },
      schema,
      contextValue: await context()
    })

    expect(result).toEqual({
      data: {
        business: JSON.parse(JSON.stringify(transformedOrganisation)),
        applications: transformedOrganisationCSApplications,
      }
    })
  })
})
