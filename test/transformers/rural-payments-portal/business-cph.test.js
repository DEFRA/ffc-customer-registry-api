import { transformOrganisationCPH } from '../../../app/transformers/rural-payments-portal/business-cph.js'

describe('Test Business CPHField Transformer', () => {
  describe('transformOrganisationCPH', () => {
    const systemUnderTest = transformOrganisationCPH

    test('given input is populated with all the fields, should enrich and transform to new data model', () => {
      expect(systemUnderTest('id', [{
        cphNumber: '43/060/0025',
        parcelNumbers: [
          'SP2936 2318'
        ]
      }])).toEqual([{
        id: 'id',
        number: '43/060/0025',
        parcelNumbers: [
          'SP2936 2318'
        ]
      }])
    })
  })
})
