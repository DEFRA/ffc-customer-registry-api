import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'

const getADGroups = async (authHeader) => {
  try {
    if (!authHeader) {
      throw new Error('No Authorization token provided')
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
    console.log('Authentication Failed')
  }
}

export const isAuthorized = async (token) => {
  const groupIds = await getADGroups(token)
  if (groupIds.includes('44a7359e-1755-484e-8cfd-6b3065140355')) {
    console.log('Auth succesful')
    return true
  }
  console.log('You are not in the correct group to access this')
}
