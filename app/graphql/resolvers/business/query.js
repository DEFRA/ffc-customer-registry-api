import { transformOrganisationToBusiness } from '../../../transformers/rural-payments-portal/business.js'
import { transformOrganisationApplicationToBusinessApplications } from '../../../transformers/rural-payments-agency-org-applications-api.js'

export const Query = {
  async business (__, { id }, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getOrganisationBySBI(id)
    const business = transformOrganisationToBusiness(response)
    return {
      id,
      land: { sbi: id },
      ...business,
      applications: this.businessApplications
    }
  },

  async businessApplications (_, { id }, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getApplicationBySbi(id)

    return transformOrganisationApplicationToBusinessApplications(response.applications)
  }
}
