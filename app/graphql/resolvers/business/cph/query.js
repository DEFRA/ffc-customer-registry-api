import { transformOrganisationCPHInfo } from '../../../../transformers/rural-payments-portal/business-cph.js'

export const CPH = async (_, { id }, { dataSources }) => {
  return await dataSources.ruralPaymentsPortalApi.getOrganisationCPHCollectionBySBI(id)
}

export const CPHInfo = async ({ business, cphNumber }, _, { dataSources }) => {
  const response = await dataSources.ruralPaymentsPortalApi.getOrganisationCPHInfoBySBIAndCPHNumber(business.id, cphNumber)

  return transformOrganisationCPHInfo(response)
}
