import RuralPaymentsPortal from '../../../services/rural-payments-portal.js'
import { transformOrganisationToBusiness } from '../../../transformers/rural-payments-portal/business.js'
import { Land } from '../land/query.js'

const ruralPaymentsPortal = new RuralPaymentsPortal()

export const Query = {
  async business (_, { id }) {
    const response = await ruralPaymentsPortal.getOrganisationBySBI(id)
    return transformOrganisationToBusiness(response)
  }
}

export const Business = {
  land: () => Land
}
