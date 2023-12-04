import { getAuth } from '../../app/auth/authenticate.js'
import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'

jest.mock('jsonwebtoken')
jest.mock('jwks-rsa')

const DECODED_TOKEN = {
  aud: 'api://2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
  iss: 'https://sts.windows.net/2d731eb1-6721-4349-9cb2-8fe9b0ab53a2/',
  iat: 1701713296,
  nbf: 1701713296,
  exp: 1701717196,
  aio: 'example',
  appid: '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
  appidacr: '1',
  groups: [
    '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2'
  ],
  idp: 'https://sts.windows.net/2d731eb1-6721-4349-9cb2-8fe9b0ab53a2/',
  oid: '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
  rh: 'example',
  sub: '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
  tid: '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
  uti: 'example',
  ver: '1.0'
}

describe('getAuth', () => {
  const mockAuthHeader = 'Bearer mockToken'
  const mockDecodedToken = {
    header: { alg: 'RS256', kid: 'mockKeyId' },
    payload: {},
    signature: 'mockSignature'
  }
  const mockKey = {
    getPublicKey: jest.fn(() => 'mockPublicKey')
  }

  beforeEach(() => {
    jwksClient.mockImplementation(() => {
      return {
        getSigningKey: jest.fn().mockResolvedValue(mockKey)
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should return an empty array when no authHeader is provided', async () => {
    expect(await getAuth('')).toEqual({})
    expect(await getAuth(null)).toEqual({})
  })

  test('should return decoded groups when token is valid', async () => {
    jwt.decode.mockReturnValue(mockDecodedToken)
    jwt.verify.mockReturnValue(DECODED_TOKEN)

    expect(await getAuth(mockAuthHeader)).toEqual(DECODED_TOKEN)
  })

  test('should return an empty array when token cannot be decoded', async () => {
    jwt.decode.mockReturnValue(null)

    expect(await getAuth(mockAuthHeader)).toEqual({})
  })

  test('should return an empty array when JWKS client fails to get signing key', async () => {
    const client = jwksClient()
    client.getSigningKey.mockRejectedValue(new Error('Key fetch failed'))

    expect(await getAuth(mockAuthHeader)).toEqual({})
  })

  test('should return an empty array when token verification fails', async () => {
    jwt.decode.mockReturnValue(mockDecodedToken)
    jwt.verify.mockImplementation(() => {
      throw new Error('Invalid token')
    })

    expect(await getAuth(mockAuthHeader)).toEqual({})
  })
})
