import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'


const getADGroups = async (authHeader) => {
  try {
    if (!authHeader) {
      throw new GraphQLError('No Authorization token provided', {
        extensions: { code: 'FORBIDDEN', },
      })
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
    throw new GraphQLError('Authentication Failed', {
      extensions: { code: 'FORBIDDEN', },
    })
  }
}

export const isAuthorized = async (token) => {
  const groupIds = await getADGroups(token)
  if (groupIds.includes(process.env.ADMIN_AD_GROUP_ID)) {
    console.log('Auth succesful')
    return true
  }
  throw new GraphQLError('You are not in the correct group to access this', {
    extensions: { code: 'FORBIDDEN', },
  })
}
