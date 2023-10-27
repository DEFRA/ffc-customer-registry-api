import { findCustomerByReferenceHandler } from '../../../core/customer/query.js'

export const Query = {
  customer (_, { referenceNumber }) {
    return findCustomerByReferenceHandler(referenceNumber)
  }
}
