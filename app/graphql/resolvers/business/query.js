import { transformOrganisationToBusiness } from '../../../transformers/rural-payments-portal/business.js'
import { transformOrganisationApplicationToBusinessApplications } from '../../../transformers/business/application.js'

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
    const response = await dataSources.api.organisation.applications.getApplicationBySbi(id)

    return transformOrganisationApplicationToBusinessApplications(response.applications)
  }
}
