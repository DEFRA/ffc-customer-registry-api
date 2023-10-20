const customer = {
  firstName : 'John',
  surname: 'Doe'
}

export function customerHandler (parent, args, context) {
  console.log('parent', parent)
  console.log('args', args)
  console.log('context', context)

  return customer
}

export function updateCustomer (parent, args, context) {
  return customer
}
