export default (data) => {
  return {
    info: {
      name: {
        name: data.name,
        reference: data.businessReference,
        vat: null,
      },
      address: {
        line1: data.address.line1,
        line2: data.address.line2,
        town: data.address.town,
        county: data.address.county,
        postcode: data.address.postcode,
        country: data.address.country
      },
      phone: {
        mobile: data.mobile,
        landline: data.landline,
        fax: data.fax
      },
      email: {
        address: data.email,
      },
      legalStatus: {
        code: data.legalStatus.id,
        type: data.legalStatus.type
      },
      type: {
        code: data.businessType.id,
        type: data.businessType.type
      },
      registrationNumbers: {
        companiesHouse: data.companiesHouseRegistrationNumber,
        charityCommission: data.charityCommissionRegistrationNumber
      },
    },
    id: data.id,
    referenceNumber: data.sbi,
  }
}