import { RuralPaymentsPortalBase } from './RuralPaymentsPortalBase.js'

export class RuralPaymentsPortalApi extends RuralPaymentsPortalBase {
  async getCustomerByCRN (crn) {
    const customerResponse = await this.get(`api/person/${crn}`)
    return customerResponse._data
  }

  async getOrganisationBySBI (sbi) {
    const organisationResponse = await this.get(`api/organisation/${sbi}`)
    return organisationResponse._data
  }

  async getApplicationsCountrysideStewardshipBySbi (sbi) {
    return this.get(`rpp/injected-screens-mt/api/organisation/${sbi}/applications/appslist`, {
      params: {
        version: '2.0.0',
        request: 'GetApplications',
        cql_filter: `SBI=${sbi}`,
        srsname: 'EPSG:27700',
        outputFormat: 'application/json'
      }
    })
  }
}
