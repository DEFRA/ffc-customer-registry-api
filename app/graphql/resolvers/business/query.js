import {
  transformOrganisationCSApplicationToBusinessApplications
} from '../../../transformers/rural-payments-portal/applications-cs.js'
import {
  transformOrganisationToBusiness
} from '../../../transformers/rural-payments-portal/business.js'

export const Query = {
  async business (__, { id }, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getOrganisationBySBI(id)
    const business = transformOrganisationToBusiness(response)
    return {
      id,
      land: { sbi: id },
      ...business,
      cph: [{
        number: '32131312',
        parcelNumbers: [
          '3123123',
          '312312312'
        ]
      }]
    }
  },

  async businessApplications (_, { id }, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getApplicationsCountrysideStewardshipBySbi(id)

    return transformOrganisationCSApplicationToBusinessApplications(response.applications)
  }
}
