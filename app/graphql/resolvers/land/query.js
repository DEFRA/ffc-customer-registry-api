export const Query = {
  land(_, { businessId }) {
    return { sbi: businessId };
  },
};

export const Land = {
  async summary({ sbi }, __, { dataSources }) {
    const landParcels =
      await dataSources.ruralPaymentsAgencyLandAPI.getLandParcelsBySbi(sbi);

    return {
      totalArea: landParcels.features.reduce(
        (totalArea, { properties }) => totalArea + Number(properties.AREA_HA),
        0
      ),
    };
  },

  async parcels({ sbi }, __, { dataSources }) {
    const landParcels =
      await dataSources.ruralPaymentsAgencyLandAPI.getLandParcelsBySbi(sbi);

    return landParcels.features.map(({ properties }) => ({
      id: properties.ID,
      parcelId: properties.PARCEL_ID,
      sheetId: properties.SHEET_ID,
      area: properties.AREA_HA,
    }));
  },
};
