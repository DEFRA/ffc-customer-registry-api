import casual from 'casual'

export const Demo = () => ({
  email: casual.email,
  firstName: casual.first_name,
  lastName: casual.last_name,
  password: casual.password
})
