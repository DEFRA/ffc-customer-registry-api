const person = {
  id: '1',
  customerReferenceNumber: null,
  name: {
    first: null,
    last: null,
    middle: null,
    otherTitle: null,
    title: null
  },
  email: {
    address: null,
    doNotContact: null,
    validated: null
  },
  dateOfBirth: '2023-10-20T10:41:48.651Z',
  phone: {
    fax: null,
    landline: null,
    mobile: null
  },
  status: {
    confirmed: null,
    deactivated: null,
    locked: null
  },
  address: {
    addressTypeId: null,
    buildingName: null,
    buildingNumberRange: null,
    city: null,
    country: null,
    county: null,
    dependentLocality: null,
    doubleDependentLocality: null,
    flatName: null,
    line1: null,
    line2: null,
    line3: null,
    line4: null,
    line5: null,
    pafOrganisationName: null,
    postalCode: null,
    street: null,
    uprn: null
  }
}

export default {
  Query: {
    person () {
      return person
    }
  }
}
