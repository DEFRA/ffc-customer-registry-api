import { faker } from '@faker-js/faker/locale/en_GB'

export const organisation = {
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
  doNotContact: false,
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

export const organisationApplications = {
  applications: [
    {
      application_id: 1648168,
      year: 2023,
      sector_description: 'PILLAR II (2014-2020)',
      module_id: 535,
      modcod: null,
      application_type_ds: 'Countryside Stewardship (MT)',
      application_type_de: 'Countryside Stewardship (MT) Module 2023',
      status_code: 'STADOM',
      status_sub_code: 'WTHDRW',
      status_description: 'WITHDRAWN',
      active_application_flag: false,
      application_movement_date: '2023-08-17T10:38:49',
      application_code: null,
      workflow_context_sub_code: null,
      needs_intervention: false,
      show_accept: false,
      submit_date: null,
      status: 'Withdrawn',
      common_lands_flag: false,
      prints_count: 4,
      queued: false,
      has_sssi_intersection_c: 0,
      has_sssi_intersection_y: 0,
      has_hefer_intersection_y: 0,
      has_been_AGRLIV: 0,
      ter_closing_date: '2023-10-07T00:00:00',
      eligibIntersections: null,
      required_sssi_approval: false
    },
    {
      application_id: 1649461,
      year: 2023,
      sector_description: 'PILLAR II (2014-2020)',
      module_id: 535,
      modcod: null,
      application_type_ds: 'Countryside Stewardship (MT)',
      application_type_de: 'Countryside Stewardship (MT) Module 2023',
      status_code: 'STADOM',
      status_sub_code: 'AGROFF',
      status_description: 'AGREEMENT OFFER',
      active_application_flag: true,
      application_movement_date: '2023-09-20T14:21:36',
      application_code: null,
      workflow_context_sub_code: 'STANDA',
      needs_intervention: false,
      show_accept: false,
      submit_date: '2023-08-17T11:44:26',
      status: 'Checking Application',
      common_lands_flag: false,
      prints_count: 4,
      queued: false,
      has_sssi_intersection_c: 0,
      has_sssi_intersection_y: 0,
      has_hefer_intersection_y: 0,
      has_been_AGRLIV: 0,
      ter_closing_date: '2023-10-07T00:00:00',
      eligibIntersections: null,
      required_sssi_approval: false
    }
  ]
}

export const organisations = [organisation]
