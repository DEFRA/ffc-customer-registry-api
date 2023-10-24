import { dirname, join } from 'path'
import { pathToFileURL, fileURLToPath } from 'url'

import { loadFiles } from '@graphql-tools/load-files'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

export async function NewApolloServer() {
  const __dirname = dirname(fileURLToPath(import.meta.url))

  const typeDefs = await loadFiles(join(__dirname, 'types'), {
    recursive: true
  })

  const resolvers = await loadFiles(join(__dirname, 'resolvers'), {
    recursive: true,
    requireMethod: async path => import(pathToFileURL(path))
  })

  return new ApolloServer({
    typeDefs,
    resolvers,
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
