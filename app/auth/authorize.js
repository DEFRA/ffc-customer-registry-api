import { Unauthorized } from '../errors/graphql.js'

const adGroupMapping = {
  ADMIN: process.env.ADMIN_AD_GROUP_ID
}

export const checkAuthGroup = (adGroups, groupName) => {
  if (adGroups.includes(adGroupMapping[groupName])) {
    return true
  }
  throw new Unauthorized('Authorization failed, you are not in the correct AD groups')
}
