import { queryCustomer, updateCustomer } from '../../core/customer/customer.js'

export const Query = {
  Customer: queryCustomer
}

export const Mutation = {
  Customer: updateCustomer
}