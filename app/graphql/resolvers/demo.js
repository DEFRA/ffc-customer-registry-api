const demoResolver = {
  Query: {
    demo: () => ({
      email: 'resolver email',
      firstName: 'resolver firstName',
      lastName: 'resolver lastName',
      password: 'resolver password'
    })
  }
}

export default demoResolver
