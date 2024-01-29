export function transformOrganisationAuthorisationToCustomerBusinessPermissionLevel (permissions, authorisation) {
  permissions.reverse()
  const privilegeNames = authorisation.flatMap(({ privilegeNames }) => privilegeNames)

  for (const permission of permissions) {
    if (privilegeNames.some(privilege => permission.privilegeNames.includes(privilege))) {
      return permission.level
    }
  }

  return null
}
