import {
  transformOrganisationCSApplicationToBusinessApplications
} from '../../../transformers/rural-payments-portal/applications-cs.js'
import {
  transformOrganisationToBusiness
} from '../../../transformers/rural-payments-portal/business.js'
import { transformOrganisationCPHInfo } from '../../../transformers/rural-payments-portal/business-cph.js'

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
  return await dataSources.ruralPaymentsPortalApi.getOrganisationCPHCollectionBySBI(id)
}

export const CPHInfo = async ({ id, cphNumber }, _, { dataSources }) => {
  const response = await dataSources.ruralPaymentsPortalApi.getOrganisationCPHInfoBySBIAndCPHNumber(id, cphNumber)

  return transformOrganisationCPHInfo(response)
}
