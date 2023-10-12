require('./insights').setup()
const Hapi = require('@hapi/hapi')
import { ApolloServer } from '@apollo/server';
import hapiApollo from '@as-integrations/hapi';

const apolloServer = new ApolloServer({
  typeDefs: "",
  resolvers: null,
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
