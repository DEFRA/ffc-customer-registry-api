import RuralPaymentsPortal from '../../../services/rural-payments-portal.js'
import RuralPaymentsPortalCustomerTransformer from '../../../transformers/rural-payments-portal/customer.js'

const ruralPaymentsPortal = new RuralPaymentsPortal()

export const Query = {
  async customer (_, { referenceNumber }) {
    const response = await ruralPaymentsPortal.getCustomerByCRN(referenceNumber)
    return RuralPaymentsPortalCustomerTransformer(response)
  }
}

