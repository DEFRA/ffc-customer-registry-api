import { transformOrganisationCPH, transformOrganisationCPHInfo } from '../../../app/transformers/rural-payments-portal/business-cph.js'

describe('Test Business CPH Transformer', () => {
  describe('transformOrganisationCPH', () => {
    const systemUnderTest = transformOrganisationCPH

    test('given input parameter is empty, should return null', () => {
      expect(systemUnderTest(null)).toEqual(null)
    })

    test('given input is populated with all the fields, should enrich and transform to new data model', () => {
      expect(systemUnderTest({
        cphNumber: '43/060/0025',
        parcelNumbers: [
          'SP2936 2318'
        ]
      })).toEqual({
        number: '43/060/0025',
        parcelNumbers: [
          'SP2936 2318'
        ]
      })
    })
  })

  describe('transformOrganisationCPHInfo', () => {
    const systemUnderTest = transformOrganisationCPHInfo

    test('given input parameter is empty, should return null', () => {
      expect(systemUnderTest(null)).toEqual(null)
    })

    test('given input parameter has coordinates X & Y, should enrich and transform to new data model', () => {
      expect(systemUnderTest({
        xCoordinate: 3123213,
        yCoordinate: 1321442
      })).toEqual({
        parish: undefined,
        startDate: undefined,
        expiryDate: undefined,
        species: undefined,
        coordinate: {
          x: 3123213,
          y: 1321442
        }
      })
    })

    test('given input parameter has coordinates X & Y and all other data, should enrich and transform to new data model', () => {
      expect(systemUnderTest({
        cphNumber: '43/060/0025',
        parish: 'CHERINGTON',
        startDate: 1210806000000,
        expiryDate: 253402214400000,
        species: [
          'OTHER'
        ],
        xCoordinate: 429000,
        yCoordinate: 236000
      })).toEqual({
        parish: 'CHERINGTON',
        startDate: 1210806000000,
        expiryDate: 253402214400000,
        species: [
          'OTHER'
        ],
        coordinate: {
          x: 429000,
          y: 236000
        }
      })
    })
  })
})
