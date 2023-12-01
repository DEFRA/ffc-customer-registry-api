import { RuralPaymentsAgencyLandAPI } from '../data-sources/rural-payments-agency-land-api.js'
import { RuralPaymentsPortalApi } from '../data-sources/rural-payments-portal/RuralPaymentsPortalApi.js'
import { getADGroups } from '../auth/authenticate.js'

export async function context ({ request }) {
  return {
    adGroups: await getADGroups(request.headers.authorization),
    dataSources: {
      ruralPaymentsAgencyLandAPI: new RuralPaymentsAgencyLandAPI(),
      ruralPaymentsPortalApi: new RuralPaymentsPortalApi()
    }
  }
}
