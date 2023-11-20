import { RESTDataSource } from '@apollo/datasource-rest'

export class RuralPaymentsAgencyLandAPI extends RESTDataSource {
  baseURL = 'https://environment.data.gov.uk'

  async getLandParcelsBySbi (sbi) {
    return this.get('/data-services/RPA/LandParcels/wfs', {
      params: {
        version: '2.0.0',
        request: 'GetFeature',
        typeNames: 'RPA:LandParcels',
        cql_filter: `SBI=${sbi}`,
        srsname: 'EPSG:27700',
        outputFormat: 'application/json'
      }
    })
  }

  async getLandCoversBySbi (sbi) {
    return this.get('/data-services/RPA/LandCovers/wfs', {
      params: {
        version: '2.0.0',
        request: 'GetFeature',
        typeNames: 'RPA:LandCovers',
        cql_filter: `SBI=${sbi}`,
        srsname: 'EPSG:27700',
        outputFormat: 'application/json'
      }
    })
  }
}
