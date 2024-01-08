import { transformOrganisationCPH, transformOrganisationCPHInfo } from '../../../app/transformers/rural-payments-portal/business-cph.js'

describe('Test Business CPHField Transformer', () => {
  describe('transformOrganisationCPH', () => {
    const systemUnderTest = transformOrganisationCPH

    test('given input parameter is empty, should return null', () => {
      expect(systemUnderTest(null)).toEqual(null)
    })

    test('given input is populated with all the fields, should enrich and transform to new data model', () => {
      expect(systemUnderTest([{
        cphNumber: '43/060/0025',
        parcelNumbers: [
          'SP2936 2318'
        ]
      }])).toEqual([{
        number: '43/060/0025',
        parcelNumbers: [
          'SP2936 2318'
        ]
      }])
    })
  })
})
