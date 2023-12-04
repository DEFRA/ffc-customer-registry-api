import { RESTDataSource } from '@apollo/datasource-rest'

export class OrganisationApplicationsDataSourceAPI extends RESTDataSource {
  // todo: not sure
  baseURL = process.env.RURAL_PAYMENTS_API_URL

  getApplicationBySbi (sbi) {
    return this.get(`rpp/injected-screens-mt/${sbi}/organisation/sbi/applications/appslist`, {
      params: {
        version: '2.0.0',
        request: 'GetFeature',
        typeNames: 'RPA:applications',
        cql_filter: `SBI=${sbi}`,
        srsname: 'EPSG:27700',
        outputFormat: 'application/json'
      }
    })
  }
}
