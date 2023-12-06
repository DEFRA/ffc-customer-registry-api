import Core from '@mocks-server/core'
import { routes } from './routes/index.js'
import collections from './collections.js'
import Hecks from '@hapipal/hecks'

const mockServerPort = Number(process.env.PORT_MOCK || 3100)

const server = new Core({
  log: 'info',
  server: {
    port: mockServerPort
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
  start: async hapiServer => {
    let serverUrl = server.server.url

    if (hapiServer && hapiServer?.info?.uri.includes(mockServerPort)) {
      await server.init()
      server._server._initServer()
      await hapiServer.register([Hecks.toPlugin(server._server._express, 'my-express-app')])

      serverUrl = hapiServer.info.uri
    } else {
      await server.start()
    }

    const { loadRoutes, loadCollections } = server.mock.createLoaders()
    loadRoutes(routes)
    loadCollections(collections)

    return serverUrl
  },
  stop: async () => server.stop(),
  selectBase: base => server.mock.collections.select(base)
}
