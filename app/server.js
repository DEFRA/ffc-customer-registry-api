import hapi from '@hapi/hapi'

import { healthyRoute } from './routes/healthy.js'
import { healthzRoute } from './routes/healthz.js'
import { fakePersonRoute } from './routes/fake-person.js'
import { setupAppInsights } from './insights.js'

setupAppInsights()

export const server = hapi.server({
  port: process.env.PORT
})

const routes = [].concat(healthyRoute, healthzRoute, fakePersonRoute)

server.route(routes)
