import { RuralPaymentsAgencyLandAPI } from '../data-sources/rural-payments-agency-land-api.js'
import { RuralPaymentsPortalApi } from '../data-sources/rural-payments-portal/RuralPaymentsPortalApi.js'
import { RuralPaymentsAgencyOrganisationApplicationsAPI } from '../data-sources/rural-payments-agency-org-applications-api.js'

export function context () {
  return {
    dataSources: {
      ruralPaymentsAgencyOrganisationApplicationsAPI: new RuralPaymentsAgencyOrganisationApplicationsAPI(),
      ruralPaymentsAgencyLandAPI: new RuralPaymentsAgencyLandAPI(),
      ruralPaymentsPortalApi: new RuralPaymentsPortalApi()
    }
  }
}
