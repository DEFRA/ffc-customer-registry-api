import { RuralPaymentsAgencyLandAPI } from '../data-sources/rural-payments-agency-land-api.js'
import { RuralPaymentsPortalApi } from '../data-sources/rural-payments-portal/RuralPaymentsPortalApi.js'
import { getAuth } from '../auth/authenticate.js'
import { Authorize } from '../auth/authorize.js'


export async function context({ request }) {
  const auth = await getAuth(request.headers.authorization)
  return {
    authorize: new Authorize(
      { adGroups: auth.groups || [] }
    ),
    auth: auth,
    dataSources: {
      ruralPaymentAgencyLandAPI: new RuralPaymentsAgencyLandAPI(),
      ruralPaymentsPortalApi: new RuralPaymentsPortalApi()
    }
  }
}
