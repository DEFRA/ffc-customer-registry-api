import { queryCustomer, updateCustomer } from '../../core/customer/customer.js'

export const Query = {
    Org: queryCustomer
}

export const Mutation = {
    Org: updateCustomer
}