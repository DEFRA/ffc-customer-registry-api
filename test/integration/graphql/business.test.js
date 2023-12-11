import { graphql } from 'graphql'

import { schema } from '../../../app/graphql/server.js'
import { fakeContext } from '../../test-setup.js'

import {
  transformOrganisationToBusiness,
  transformOrganisationCSApplicationToBusinessApplications
} from '../../../app/transformers/rural-payments-portal'
import {
  organisation as organisationFixture,
  organisationCSApplications as organisationCSApplicationsFixture
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
      contextValue: fakeContext
    })

    expect(result).toEqual({
      data: {
        business: JSON.parse(JSON.stringify({
          ...transformedOrganisation,
          ...transformedOrganisationCSApplications
        }))
      }
    })
  })
})

describe('Query businessApplications', async () => {
  const result = await graphql({
    source: `#graphql
    query BusinessApplications {
        businessApplications(id: "5444918") {
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
    `,
    variableValues: {
      customerId: '5444918'
    },
    schema,
    contextValue: context()
  })

  expect(result).toEqual({
    data: [
      {
        applicationStatus: {
          id: 1648168,
          open: null,
          status: 'Withdrawn',
          type: 'Countryside Stewardship (MT) Module 2023',
          sector: null,
          year: 2023,
          FRN: 0,
          office: null
        },
        csClaims: {
          schemaYear: 2023,
          type: 'Countryside Stewardship (MT)',
          status: 'WTHDRW',
          lastMovement: '2023-08-17T10:38:49'
        }
      },
      {
        applicationStatus: {
          id: 1649461,
          open: null,
          status: 'Checking Application',
          type: 'Countryside Stewardship (MT) Module 2023',
          sector: 'STANDA',
          year: 2023,
          FRN: 0,
          office: null
        },
        csClaims: {
          schemaYear: 2023,
          type: 'Countryside Stewardship (MT)',
          status: 'AGROFF',
          lastMovement: '2023-09-20T14:21:36'
        }
      }
    ]
  })
})
