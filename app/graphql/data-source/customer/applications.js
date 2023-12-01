import { RESTGraphQLDataSource } from '../'

export class CustomerApplicationsDataSource extends RESTGraphQLDataSource {
  baseURL = process.env.RURAL_PAYMENTS_API_URL

  async getApplicationsByCustomerID (crn) {
    const customerApplicationsResponse = await this.get(`api/person/${crn}/applications`)
    return customerApplicationsResponse._data
  }
}
