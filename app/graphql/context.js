import { RuralPaymentsAgencyLandAPI } from '../data-sources/rural-payments-agency-land-api.js'
import { RuralPaymentsPortalApi } from '../data-sources/rural-payments-portal/RuralPaymentsPortalApi.js'
import { OrganisationApplicationsDataSourceAPI } from '../data-sources/ogranisation/applications.js'

export function context () {
  return {
    dataSources: {
      ruralPaymentsAgencyLandAPI: new RuralPaymentsAgencyLandAPI(),
      ruralPaymentsPortalApi: new RuralPaymentsPortalApi(),
      api: {
        organisation: {
          applications: new OrganisationApplicationsDataSourceAPI()
        }
      }
    }
  }
}
