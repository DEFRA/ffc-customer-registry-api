export function transformSitiAgriAuthorisationToRoles (authorisation) {
  return authorisation.personRoles.map(({ role }) => role)
}

export function transformSitiAgriAuthorisationToPrivileges (authorisation) {
  return authorisation.personPrivileges.map(
    ({ privilegeNames }) => privilegeNames[0]
  )
}
