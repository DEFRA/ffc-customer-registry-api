import { RuralPaymentsAgencyLandAPI } from '../data-sources/rural-payments-agency-land-api.js'
import { apolloServer } from './server.js'

export async function context () {
  const { cache } = apolloServer

  return {
    dataSources: {
      ruralPaymentsAgencyLandAPI: new RuralPaymentsAgencyLandAPI({ cache })
    }
  }
}
