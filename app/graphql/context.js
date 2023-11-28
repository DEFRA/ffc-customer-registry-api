import { RuralPaymentsAgencyLandAPI } from '../data-sources/rural-payments-agency-land-api.js'
import { RuralPaymentsPortalApi } from '../data-sources/rural-payments-portal/RuralPaymentsPortalApi.js'

export function context({ request }) {
  return {
    authorization: request.headers.authorization,
    dataSources: {
      ruralPaymentsAgencyLandAPI: new RuralPaymentsAgencyLandAPI(),
      ruralPaymentsPortalApi: new RuralPaymentsPortalApi()
    }
  }
}
