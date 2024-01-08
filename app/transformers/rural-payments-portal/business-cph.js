export function transformOrganisationCPH (id, data) {
  if (!data) {
    return null
  }

  if (!id) {
    return null
  }

  const result = []
  for (const record of data) {
    result.push({
      number: record.cphNumber,
      parcelNumbers: record.parcelNumbers,

      async parish (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            record.cphNumber
          )

        return response.parish
      },

      async startDate (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            record.cphNumber
          )

        return response.startDate
      },

      async expiryDate (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            record.cphNumber
          )

        return response.expiryDate
      },

      async species (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            record.cphNumber
          )

        return response.species
      },

      async coordinate (_, { dataSources }) {
        const response = await dataSources
          .ruralPaymentsPortalApi
          .getOrganisationCPHInfoBySBIAndCPHNumber(
            id,
            record.cphNumber
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
