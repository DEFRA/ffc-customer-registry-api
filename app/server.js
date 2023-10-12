import { join } from 'path'

require('./insights').setup()
const Hapi = require('@hapi/hapi')
import { ApolloServer } from '@apollo/server';
import hapiApollo from '@as-integrations/hapi';
import { loadFilesSync } from '@graphql-tools/load-files'

const apolloServer = new ApolloServer({
  typeDefs: loadFilesSync(
    join(__dirname, 'graphql', 'types'),
    { recursive: true }
  ),
  resolvers: loadFilesSync(
    join(__dirname, 'graphql', 'resolvers'),
    { recursive: true }
  ),
});

apolloServer.start().catch(e => {
  console.error(e.message)

  process.exit(1)
})

const server = Hapi.server({
  port: process.env.PORT
})

server.register({
  plugin: hapiApollo,
  options: {
    apolloServer,
    path: '/graphql'
  }
}).catch(e => {
  console.error('error registering GraphQL API middleware for hapi', e.message)

  process.exit(1)
})

const routes = [].concat(
  require('./routes/healthy'),
  require('./routes/healthz')
)

server.route(routes)

module.exports = server
