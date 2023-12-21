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
      ...business
    }
  },

  async businessApplications (_, { id }, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getApplicationsCountrysideStewardshipBySbi(id)

    return transformOrganisationCSApplicationToBusinessApplications(response.applications)
  }
}

export const CPH = async ({ id }, _, { dataSources }) => {
  const response = await dataSources.ruralPaymentsPortalApi.getOrganisationCPHCollectionBySBI(id)
  // todo: finish transformers with unit tests

  response.status = 'success'

  return response
}

export const CPHInfo = async ({ id }, { cphNumber }, { dataSources }) => {
  const response = await dataSources.ruralPaymentsPortalApi.getOrganisationCPHInfoBySBIAndCPHNumber(id, cphNumber)
  // todo: finish transformers with unit tests

  response.status = 'success'

  return response
}
