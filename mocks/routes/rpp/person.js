import { person, persons, personApplications } from '../../fixtures/person.js'
import { pagination } from '../../fixtures/pagination.js'

export default [
  {
    id: 'rpp-person-get-by-id',
    url: '/rpp/api/person/:personId',
    method: ['GET'],
    variants: [
      {
        id: 'default',
        type: 'json',
        options: {
          status: 200,
          body: { _data: person }
        }
      }
    ]
  },
  {
    id: 'rpp-person-applications-get-by-id',
    url: '/rpp/api/person/:personId/applications',
    method: ['GET'],
    variants: [
      {
        id: 'default',
        type: 'json',
        options: {
          status: 200,
          body: { _data: personApplications }
        }
      }
    ]
  },
  {
    id: 'rpp-person-get-by-crn',
    url: '/rpp/api/person/search',
    method: ['POST'],
    variants: [
      {
        id: 'default',
        type: 'middleware',
        options: {
          middleware: (req, res) => {
            try {
              const body = req.body
              if (!body.searchFieldType || !body.primarySearchPhrase) {
                throw new Error('Invalid request')
              }
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  _data: persons,
                  _page: pagination
                })
              )
            } catch (error) {
              res.status(400)
              res.send()
            }
          }
        }
      }
    ]
  }
]
