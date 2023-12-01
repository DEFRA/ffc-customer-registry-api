import { CustomerApplicationTransformer } from '../../../transformers/customer/index.js'

export const Query = {
  async customerApplications (__, { id }, { dataSources }) {
    const response = await dataSources.rest.customer.applicationsAPI.getApplicationsByCustomerID(id)

    return CustomerApplicationTransformer(response.applications)
  }
}
