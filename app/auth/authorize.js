import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'

import { Unauthorized } from '../errors/graphql.js'

const getADGroups = async (authHeader) => {
  try {
    if (!authHeader) {
      throw new Unauthorized("No Authorization header provided")
    }
    const client = jwksClient({
      jwksUri: `https://login.microsoftonline.com/${process.env.API_TENANT_ID}/discovery/v2.0/keys`
    })
    const token = authHeader.split(' ')[1]
    const decodedToken = jwt.decode(token, { complete: true })
    const header = decodedToken.header
    const key = await client.getSigningKey(header.kid)
    const signingKey = key.getPublicKey()
    const decoded = jwt.verify(token, signingKey)
    return decoded.groups
  } catch (err) {
    console.log({ error: err })
    throw new Unauthorized("Authentication failed")
  }
}

export const isAuthorized = async (token) => {
  const groupIds = await getADGroups(token)
  if (groupIds.includes(process.env.ADMIN_AD_GROUP_ID)) {
    return true
  }
  throw new Unauthorized("Authorization failed, you are not in the correct AD groups")
}
