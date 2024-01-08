export function transformOrganisationCPH (id, data) {
  if (!data) {
    return null
  }

  if (!id) {
    return null
  }

  const result = []
  for (const { cphNumber, parcelNumbers } of data) {
    result.push({
      number: cphNumber,
      parcelNumbers,

      async parish (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            cphNumber
          )

        return response.parish
      },

      async startDate (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            cphNumber
          )

        return response.startDate
      },

      async expiryDate (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            cphNumber
          )

        return response.expiryDate
      },

      async species (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            cphNumber
          )

        return response.species
      },

      async coordinate (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            cphNumber
          )

        return {
          x: response.xCoordinate,
          y: response.yCoordinate
        }
      }
    })
  }

  return result
}
