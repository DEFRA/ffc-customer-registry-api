// import { transformOrganisationCPH, transformOrganisationCPHInfo } from '../../../../transformers/rural-payments-portal/business-cph.js'

export const CPHField = async (_, { id }, { dataSources }) => {
  // const response = await dataSources.ruralPaymentsPortalApi.getOrganisationCPHCollectionBySBI(id)
  // const transformedResponse = transformOrganisationCPH(response)

  return {
    number: '3213223',
    parcelNumbers: [
      'ssssss'
    ],
    info: null
  }
}

export const CPHInfoField = async ({ number }, { id }, { dataSources }) => {
  // const response = await dataSources.ruralPaymentsPortalApi.getOrganisationCPHInfoBySBIAndCPHNumber(id, number)

  return null
}
