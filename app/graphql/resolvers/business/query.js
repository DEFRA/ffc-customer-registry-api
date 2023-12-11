import {
  transformOrganisationToBusiness,
  transformOrganisationCSApplicationToBusinessApplications
} from '../../../transformers/rural-payments-portal'

export const Query = {
  async business (__, { id }, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getOrganisationBySBI(id)
    const business = transformOrganisationToBusiness(response)
    return {
      id,
      land: { sbi: id },
      ...business
    }
  },

  async businessApplications (_, { id }, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getApplicationsCountrysideStewardshipBySbi(id)

    return transformOrganisationCSApplicationToBusinessApplications(response.applications)
  }
}
