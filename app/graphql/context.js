import { RuralPaymentsAgencyLandAPI } from '../data-sources/rural-payments-agency-land-api.js'
import { RuralPaymentsPortalApi } from '../data-sources/rural-payments-portal/RuralPaymentsPortalApi.js'
import { CustomerApplicationsDataSource } from './data-source/customer/applications.js'

export function context () {
  return {
    dataSources: {
      ruralPaymentsAgencyLandAPI: new RuralPaymentsAgencyLandAPI(),
      ruralPaymentsPortalApi: new RuralPaymentsPortalApi(),
      rest: {
        customer: {
          applicationsAPI: new CustomerApplicationsDataSource(),
        }
      }
    }
  }
}
