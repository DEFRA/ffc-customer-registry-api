export function transformOrganisationCPHInfo (data) {
  if (!data) {
    return null
  }

  return {
    parish: data.parish,
    startDate: data.startDate,
    expiryDate: data.expiryDate,
    species: data.species,
    coordinate: {
      x: data.xCoordinate,
      y: data.yCoordinate
    }
  }
}