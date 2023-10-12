const path = require('path')

require('./insights').setup()
const Hapi = require('@hapi/hapi')
const  ApolloServer = require('@apollo/server');
const hapiApollo = require('@as-integrations/hapi');
const graphql =  require('@graphql-tools/load-files')

const apolloServer = new ApolloServer.ApolloServer({
  typeDefs: graphql.loadFilesSync(
    path.join(__dirname, 'graphql', 'types'),
    { recursive: true }
  ),
  resolvers: graphql.loadFilesSync(
    path.join(__dirname, 'graphql', 'resolvers'),
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
