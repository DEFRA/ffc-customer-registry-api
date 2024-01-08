import { transformOrganisationCPH } from '../../../app/transformers/rural-payments-portal/business-cph.js'

describe('Test Business CPHField Transformer', () => {
  describe('transformOrganisationCPH', () => {
    const systemUnderTest = transformOrganisationCPH

    test('given input parameter for id is empty, should return null', () => {
      expect(systemUnderTest(null)).toEqual(null)
    })

    test('given input parameter for data is empty, should return null', () => {
      expect(systemUnderTest('mockId', null)).toEqual(null)
    })

    test('given input is populated with all the fields, should enrich and transform to new data model', () => {
      expect(systemUnderTest('id', [{
        cphNumber: '43/060/0025',
        parcelNumbers: [
          'SP2936 2318'
        ]
      }])).toEqual([{
        number: '43/060/0025',
        parcelNumbers: [
          'SP2936 2318'
        ],
        coordinate: expect.any(Function),
        startDate: expect.any(Function),
        expiryDate: expect.any(Function),
        parish: expect.any(Function),
        species: expect.any(Function)
      }])
    })
  })
})
