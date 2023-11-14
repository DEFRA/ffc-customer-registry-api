const { faker } = require('@faker-js/faker/locale/en_GB')

const organisation = {
  id: faker.string.numeric(7),
  name: faker.company.name(),
  sbi: parseInt(faker.string.numeric(9)),
  confirmed: false,
  deactivated: false,
  locked: false,
  address: {
    address1: null,
    address2: null,
    address3: null,
    address4: null,
    address5: null,
    pafOrganisationName: null,
    flatName: null,
    buildingNumberRange: null,
    buildingName: null,
    street: null,
    city: 'HEATHFIELD',
    county: null,
    postalCode: 'TA2 8LH',
    country: 'United Kingdom',
    uprn: '200001642435',
    dependentLocality: null,
    doubleDependentLocality: null,
    addressTypeId: null
  },
  email: 'lynehouseliveryq@yrevilesuohenyli.com.test',
  emailValidated: false,
  landline: '01234394643',
  mobile: null,
  fax: null,
  businessType: {
    id: 101443,
    type: 'Not Specified'
  },
  businessReference: '1100974309',
  legalStatus: {
    id: 102111,
    type: 'Sole Proprietorship'
  },
  companiesHouseRegistrationNumber: null,
  charityCommissionRegistrationNumber: null
}

module.exports.organisations = [organisation]
module.exports.organisation = organisation