import { transformOrganisationToBusiness } from '../../../transformers/rural-payments-portal/business.js'

export const Query = {
  async business (__, { id }, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getOrganisationBySBI(id)
    const business = transformOrganisationToBusiness(response)

    // todo: create transformOrganisationApplicationToBusinessApplications() { applications: [Applications]}

    return {
      id,
      land: { sbi: id },
      ...business
    }
  }
}
