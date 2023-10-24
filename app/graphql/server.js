import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { loadFiles } from '@graphql-tools/load-files'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const typeDefs = (async () => await loadFiles(join(__dirname, 'types'), {
  recursive: true
}))()

export const resolvers = (async () => await loadFiles(join(__dirname, 'resolvers'), {
  recursive: true
}))()

export async function NewApolloServer() {
  return new ApolloServer({
    typeDefs: await typeDefs,
    resolvers: await resolvers,
    plugins: [
      (() => {
        if (process.env?.NODE_ENV === 'production') {
          return ApolloServerPluginLandingPageDisabled()
        }

        return ApolloServerPluginLandingPageLocalDefault()
      })()
    ]
  })
}
