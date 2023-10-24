import casual from 'casual'

const demoMock = {
  Demo: () => ({
    email: casual.email,
    firstName: casual.first_name,
    lastName: casual.last_name,
    password: casual.password
  })
}

export default demoMock
