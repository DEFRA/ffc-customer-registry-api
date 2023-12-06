import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'

export async function getAuth(request) {
  const authHeader = request?.headers?.authorization
  if (!authHeader) {
    return {}
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

  return decoded
}
