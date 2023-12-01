import { ruralPaymentsPortalCustomerTransformer } from '../../../transformers/rural-payments-portal/customer.js'
import { Query as CustomerApplicationQuery } from './applications.js'

export const Query = {
  async customer (__, { id }, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getCustomerByCRN(id)

    return {
      ...ruralPaymentsPortalCustomerTransformer(response),
      applications: CustomerApplicationQuery,
    }
  }
}
