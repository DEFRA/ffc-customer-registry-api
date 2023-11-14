export default (data) => {
  return {
    info: {
      name: {
        title: data.title,
        otherTitle: data.otherTitle,
        first: data.firstName,
        middle: data.middleName,
        last: data.lastName
      },
      dateOfBirth: data.dateOfBirth,
      phone: {
        mobile: data.mobile,
        landline: data.landline
      },
      email: {
        address: data.email,
      },
      address: {
        line1: data.address.line1,
        line2: data.address.line2,
        town: data.address.town,
        county: data.address.county,
        postcode: data.address.postcode,
        country: data.address.country
      },
      status: {
        locked: data.locked,
        confirmed: data.confirmed,
        deactivated: data.deactivated,
      },
    },
    referenceNumber: data.id
  }
}
