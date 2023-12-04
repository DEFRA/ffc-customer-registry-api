export const Mutation = {
  async updateCustomerAuthenticationQuestions(_, { input }, context) {
    context.authorize.checkAuthGroup('ADMIN')
    return input
  }
}
