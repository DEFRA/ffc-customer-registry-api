export const CPH = {
  async parish ({ id, number }, _, { dataSources }) {
    const response = await dataSources
      .ruralPaymentsPortalApi
      .getOrganisationCPHInfoBySBIAndCPHNumber(
        id,
        number
      )

    return response.parish
  },

  async startDate ({ id, number }, __, { dataSources }) {
    const response = await dataSources
      .ruralPaymentsPortalApi
      .getOrganisationCPHInfoBySBIAndCPHNumber(
        id,
        number
      )

    return response.startDate
  },

  async expiryDate ({ id, number }, __, { dataSources }) {
    const response = await dataSources
      .ruralPaymentsPortalApi
      .getOrganisationCPHInfoBySBIAndCPHNumber(
        id,
        number
      )

    return response.expiryDate
  },

  async species ({ id, number }, __, { dataSources }) {
    const response = await dataSources
      .ruralPaymentsPortalApi
      .getOrganisationCPHInfoBySBIAndCPHNumber(
        id,
        number
      )

    return response.species
  },

  async coordinate ({ id, number }, __, { dataSources }) {
    const response = await dataSources
      .ruralPaymentsPortalApi
      .getOrganisationCPHInfoBySBIAndCPHNumber(
        id,
        number
      )

    return {
      x: response.xCoordinate,
      y: response.yCoordinate
    }
  }
}
