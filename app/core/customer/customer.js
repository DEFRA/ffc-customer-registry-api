const customer = {
  customerReferenceNumber: 123,
  firstName: 'John',
  surname: 'Doe',
  memorableDate: 'String',
  memeorableLocation: 'String',
  memorableEvent: 'String'
}

export function queryCustomer(parent, args, context) {
  console.log('parent', parent)
  console.log('args', args)
  console.log('context', context)

  return customer
}

export function updateCustomer(parent, args, context) {
  return customer
}
