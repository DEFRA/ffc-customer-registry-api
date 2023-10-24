import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { addMocksToSchema } from '@graphql-tools/mock'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { loadFiles } from '@graphql-tools/load-files'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeResolvers } from '@graphql-tools/merge'

const graphqlPath = dirname(fileURLToPath(import.meta.url))

export const schema = makeExecutableSchema({
  typeDefs: await loadFiles(join(graphqlPath, 'types')),
  resolvers: await loadFiles(join(graphqlPath, 'resolvers')),
  resolverValidationOptions: {
    requireResolversForArgs: 'error',
    requireResolversForAllField: 'error',
    requireResolversForResolveType: 'error',
    requireResolversToMatchSchema: 'error',
  }
})

const config = {
  schema,
  plugins: [
    (() => {
      if (process.env?.NODE_ENV === 'production') {
        return ApolloServerPluginLandingPageDisabled()
      }

      return ApolloServerPluginLandingPageLocalDefault()
    })()
  ]
}

if (process.env.MOCK_LEVEL) {
  if (
    !(process.env.MOCK_LEVEL === 'partial' || process.env.MOCK_LEVEL === 'full')
  ) {
    throw new Error('MOCK_LEVEL should be either "partial" or "full"')
  }

  config.schema = addMocksToSchema({
    schema,
    mocks: mergeResolvers(await loadFiles(join(graphqlPath, 'mocks'))),
    preserveResolvers: process.env.MOCK_LEVEL === 'partial'
  })
}

export const apolloServer = new ApolloServer(config)
