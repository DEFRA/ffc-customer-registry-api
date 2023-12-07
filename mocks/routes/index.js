import rppAuthenticate from './rpp/authenticate.js'
import rppLms from './rpp/lms.js'
import rppOrganisation from './rpp/organisation.js'
import rppPerson from './rpp/person.js'
import rppMessages from './rpp/messages.js'

export const routes = [...rppAuthenticate, ...rppLms, ...rppOrganisation, ...rppPerson, ...rppMessages]
