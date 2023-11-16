import hapiApollo from '@as-integrations/hapi'

import { server } from './server.js'
import { apolloServer } from './graphql/server.js'
import { HttpDispatcher } from './lib'

const init = async () => {
  await apolloServer.start()

  await server.register({
    plugin: hapiApollo.default,
    options: {
      context: async ({ request }) => ({
        headers: request.headers,
        services: {
          httpDispatcher: new HttpDispatcher()
        }
      }),
      apolloServer,
      path: '/graphql'
    }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
