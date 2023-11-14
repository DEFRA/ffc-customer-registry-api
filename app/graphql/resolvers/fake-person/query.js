export const Query = {
  fakePersonGroup(_, __, { dataSources }) {
    return {
      people: Array(5)
        .fill(null)
        .map(() => dataSources.fakePersonAPI.getPerson()),
    };
  },
};
