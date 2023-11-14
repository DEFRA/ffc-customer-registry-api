import { RuralPaymentsPortalAPI } from './rural-payments-portaj.js'

export class PersonAPI extends RuralPaymentsPortalAPI {
  constructor ({ cache }) {
    super({ cache })
  }

  async getPerson () {
    return this.get('/person')
  }
}
