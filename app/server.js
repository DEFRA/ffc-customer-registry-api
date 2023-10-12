const path = require('path')

require('./insights').setup()
const Hapi = require('@hapi/hapi')
const  ApolloServer = require('@apollo/server');
const graphql =  require('@graphql-tools/load-files')

const typeDefs = graphql.loadFilesSync(
  path.join(__dirname, 'graphql', 'types'),
  {
    recursive: true,
  }
)

const resolvers = graphql.loadFilesSync(
  path.join(__dirname, 'graphql', 'resolvers'),
  { recursive: true }
)

const apolloServer = new ApolloServer.ApolloServer({
  typeDefs,
  resolvers,
});

const server = Hapi.server({
  port: process.env.PORT
})



const routes = [].concat(
  require('./routes/healthy'),
  require('./routes/healthz')
)

server.route(routes)

module.exports = {
  apolloServer,
  server
}
