export function transformOrganisationCPH (id, data) {
  if (!id) {
    return null
  }

  if (!data) {
    return null
  }

  return data.map(({ cphNumber, ...rest }) => ({ id, number: cphNumber, ...rest }))
}
