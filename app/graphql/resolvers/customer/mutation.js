import { checkAuthGroup } from '../../../auth/authorize.js'


export const Mutation = {
  async updateCustomerAuthenticationQuestions(_, { input }, context) {
    if (checkAuthGroup(context.adGroups, 'ADMIN')) {
      return input
    }
  }
}
