import { isAuthorized } from '../../../auth/authorize.js'
export const Mutation = {
  async updateCustomerAuthenticationQuestions(_, { input }, context) {
    if (await isAuthorized(context.authorization)) {
      return input
    }
  }
}
