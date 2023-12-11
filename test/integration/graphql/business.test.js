import { graphql } from 'graphql'

import { schema } from '../../../app/graphql/server.js'
import { fakeContext } from '../../test-setup.js'

import { transformOrganisationToBusiness } from '../../../app/transformers/rural-payments-portal/business.js'
import { organisation as organisationFixture } from '../../../mocks/fixtures/organisation.js'

describe('Query.customer', () => {
  it('should return business data', async () => {
    const transformedOrganisation = transformOrganisationToBusiness(organisationFixture)

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
        business: JSON.parse(JSON.stringify(transformedOrganisation))
      }
    })
  })
})

describe('Query businessApplications', () => {
  it('should return application data', async () => {
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
                  frn
                  office
              }
              csClaim {
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
      contextValue: fakeContext
    })

    expect(result).toEqual({
      data: {
        businessApplications: [
          {
            applicationStatus: {
              id: expect.any(Number),
              open: null,
              status: 'Withdrawn',
              type: expect.any(String),
              sector: null,
              year: expect.any(Number),
              frn: expect.any(Number),
              office: null
            },
            csClaim: {
              schemaYear: expect.any(Number),
              type: expect.any(String),
              status: 'WTHDRW',
              lastMovement: expect.any(String)
            }
          },
          {
            applicationStatus: {
              id: expect.any(Number),
              open: null,
              status: 'Checking Application',
              type: expect.any(String),
              sector: 'STANDA',
              year: expect.any(Number),
              frn: expect.any(Number),
              office: null
            },
            csClaim: {
              schemaYear: expect.any(Number),
              type: expect.any(String),
              status: 'AGROFF',
              lastMovement: expect.any(String)
            }
          }
        ]
      }
    })
  })
})
