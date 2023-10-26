import { equal } from 'assert'
import { apolloServer } from '../../app/graphql/server.js'

const query = `#graphql
  query DemoTest {
    demo {
      email
      firstName
      lastName
      password
    }
  }
`

describe('Query.demo', () => {
  it('should return -1 when the value is not present', async () => {
    const response = await apolloServer.executeOperation({ query })

    console.log(response)
  })
})
