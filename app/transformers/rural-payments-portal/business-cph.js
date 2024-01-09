export function transformOrganisationCPH (id, data) {
  return data.map(({ cphNumber, ...rest }) => ({ id, number: cphNumber, ...rest }))
}
