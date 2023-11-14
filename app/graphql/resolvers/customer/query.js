import RuralPaymentsPortal from '../../../services/rural-payments-portal.js'
import RuralPaymentsPortalCustomerTransformer from '../../../transformers/rural-payments-portal/customer.js'

const ruralPaymentsPortal = new RuralPaymentsPortal()

export const Query = {
  async customer (_, { id }) {
    const response = await ruralPaymentsPortal.getCustomerByCRN(id)
    return RuralPaymentsPortalCustomerTransformer(response)
  }
}
