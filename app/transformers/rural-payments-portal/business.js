export const transformOrganisationToBusiness = data => {
  return {
    info: {
      name: data.name,
      reference: data.businessReference,
      vat: null,
      address: {
        pafOrganisationName: data.address.pafOrganisationName,
        buildingNumberRange: data.address.buildingNumberRange,
        buildingName: data.address.buildingName,
        flatName: data.address.flatName,
        street: data.address.street,
        city: data.address.city,
        county: data.address.county,
        postalCode: data.address.postalCode,
        country: data.address.country,
        uprn: data.address.uprn,
        dependentLocality: data.address.dependentLocality,
        doubleDependentLocality: data.address.doubleDependentLocality,
        typeId: data.address.addressTypeId
      },
      phone: {
        mobile: data.mobile,
        landline: data.landline,
        fax: data.fax
      },
      email: {
        address: data.email,
        validated: data.emailValidated,
        doNotContact: data.doNotContact
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
      sbi: data.sbi
    },
    id: data.id
  }
}
