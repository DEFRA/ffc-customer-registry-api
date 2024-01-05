export function transformOrganisationCPH (data, infoFieldResolver) {
  if (!data) {
    return null
  }

  const result = []
  for (const record of data) {
    result.push({
      number: record.cphNumber,
      parcelNumbers: record.parcelNumbers,
      info: infoFieldResolver
    })
  }

  return result
}

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
