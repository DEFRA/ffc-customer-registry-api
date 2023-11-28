import { isAuthorized } from '../../../auth/authorize.js'
export const Mutation = {
  updateCustomerAuthenticationQuestions(_, { input }, context) {
    if (isAuthorized(context.authorization)) {
      return null
    }
  }
}
