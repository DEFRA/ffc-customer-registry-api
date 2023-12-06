// import { getAuth } from '../../app/auth/authenticate.js'
// import jwt from 'jsonwebtoken'
// import jwksClient from 'jwks-rsa'
// import { jest } from '@jest/globals'

// const DECODED_TOKEN = {
//   header: {
//     typ: 'JWT',
//     alg: 'RS256',
//     x5t: 'x5t',
//     kid: 'kid'
//   },
//   payload: {
//     aud: 'api://2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
//     iss: 'https://sts.windows.net/2d731eb1-6721-4349-9cb2-8fe9b0ab53a2/',
//     iat: 1701713296,
//     nbf: 1701713296,
//     exp: 1701717196,
//     aio: 'aio',
//     appid: '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
//     appidacr: '1',
//     groups: [
//       '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2'
//     ],
//     idp: 'https://sts.windows.net/2d731eb1-6721-4349-9cb2-8fe9b0ab53a2/',
//     oid: '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
//     rh: 'rh',
//     sub: '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
//     tid: '2d731eb1-6721-4349-9cb2-8fe9b0ab53a2',
//     uti: 'uti',
//     ver: '1.0'
//   },
//   signature: 'signature'
// }

// jest.mock('jsonwebtoken')
// jwt.decode = jest.fn()
// jwt.verify = jest.fn()

// jwksClient.getSigningKey = jest.fn()


// describe('getAuth', () => {
//   const mockAuthHeader = 'Bearer mockToken'

//   // test('should return an empty object when no authHeader is provided', async () => {
//   //   expect(await getAuth('')).toEqual({})
//   //   expect(await getAuth(null)).toEqual({})
//   // })

//   test('should return decoded token when token is valid', async () => {
//     jwt.decode.mockReturnValueOnce(DECODED_TOKEN)
//     jwt.verify.mockReturnValueOnce(DECODED_TOKEN.payload)
//     expect(await getAuth(mockAuthHeader)).toEqual(DECODED_TOKEN.payload)
//   })

//   // test('should return an empty object when token cannot be decoded', async () => {
//   //   jwt.decode.mockImplementation(() => {
//   //     throw new Error('Invalid token')
//   //   })
//   //   expect(await getAuth(mockAuthHeader)).toEqual({})
//   // })

//   // test('should return an empty object when token verification fails', async () => {
//   //   jwt.verify.mockImplementation(() => {
//   //     throw new Error('Invalid token')
//   //   })

//   //   expect(await getAuth(mockAuthHeader)).toEqual({})
//   // })
// })
