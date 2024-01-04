import { transformOrganisationCPH, transformOrganisationCPHInfo } from '../../../../transformers/rural-payments-portal/business-cph.js'

export const CPH = async (_, { id }, { dataSources }) => {
  const response = await dataSources.ruralPaymentsPortalApi.getOrganisationCPHCollectionBySBI(id)

  return {
    ...transformOrganisationCPH(response),
    info: CPHInfo
  }
}

export const CPHInfo = async ({ cphNumber }, { id }, { dataSources }) => {
  const response = await dataSources.ruralPaymentsPortalApi.getOrganisationCPHInfoBySBIAndCPHNumber(id, cphNumber)

  return transformOrganisationCPHInfo(response)
}
