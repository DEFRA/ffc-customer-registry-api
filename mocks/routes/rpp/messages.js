import { createMessage } from '../../fixtures/messages.js'

const requiredParams = ['personId', 'filter', 'page', 'size']

export default [
  {
    id: 'rpp-messages',
    url: '/rpp/notifications',
    method: ['GET'],
    variants: [
      {
        id: 'default',
        type: 'middleware',
        options: {
          middleware: (req, res) => {
            const missingParam = requiredParams.find(param => !req.query.hasOwnProperty(param))
            if (missingParam) {
              res.status(400)
              res.send()

              return
            }

            const messageParams = {
              personId: +req.query.personId
            }

            if (req.query.organisationId) {
              messageParams.organisationId = +req.query.organisationId
            }

            const messageCount = Math.floor(Math.random() * 10) + 1
            const messages = [...Array(messageCount)].map(() => createMessage(messageParams))

            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                notifications: messages
              })
            )
          }
        }
      }
    ]
  }
]
