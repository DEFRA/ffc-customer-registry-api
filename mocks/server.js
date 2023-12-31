import Core from '@mocks-server/core'
import { routes } from './routes/index.js'
import collections from './collections.js'

const server = new Core({
  log: 'silent',
  server: {
    port: Number(process.env.PORT_MOCK || 3100)
  },
  config: {
    allowUnknownArguments: true,
    readArguments: true,
    readEnvironment: true,
    readFile: false
  },
  files: {
    enabled: false
  },
  mock: {
    collections: {
      selected: 'base'
    }
  }
})

export default {
  start: async () => {
    await server.start()

    const { loadRoutes, loadCollections } = server.mock.createLoaders()
    loadRoutes(routes)
    loadCollections(collections)

    return server.server.url
  },
  stop: async () => server.stop(),
  selectBase: base => server.mock.collections.select(base)
}
