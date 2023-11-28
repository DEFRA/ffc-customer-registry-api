import { getAuth } from '../../../auth/user.js'

export const Query = {
  customer(_, { referenceNumber }, context) {
    getAuth(context.headers.authorization)
    return null
  }
}
