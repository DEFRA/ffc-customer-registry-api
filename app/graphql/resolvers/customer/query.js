export const Query = {
  async customer (_, { referenceNumber }, { dataSources }) {
    const person = await dataSources.personAPI.getPerson()

    return {
      referenceNumber,
      info: {
        name: {
          first: person._data.firstName,
          last: person._data.lastName
        }
      }
    }
  }
}
