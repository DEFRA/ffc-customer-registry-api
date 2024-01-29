import { pagination } from '../../fixtures/pagination.js'
import { organisationPersonSummary } from '../../fixtures/organisation-person-summary.js'
import { organisation, organisations, organisationCSApplications } from '../../fixtures/organisation.js'

export default [
  {
    id: 'rpp-organisation-get-by-id',
    url: '/rpp/api/organisation/:orgId',
    method: ['GET'],
    variants: [
      (function () {
        if (process.env.MOCK_LEVEL === 'full') {
          return {
            id: 'default',
            type: 'json',
            options: {
              status: 200,
              body: { _data: organisation }
            }
          }
        }

        return {
          id: 'dynamic-org-mock-id',
          type: 'middleware',
          options: {
            middleware: async (req, res) => {
              const filteredOrganisations = await import('./../../samples/organisation.json')
                .filter(v => v.id === req.params.orgId)

              if (filteredOrganisations.length() !== 1) {
                res.status(404)

                return
              }

              res.status(200)
              res.send({
                _data: await import('./../../samples/organisation.json').filter(v => v.id === req.params.orgId)[0]
              })
            }
          }
        }
      })()
    ]
  },
  {
    id: 'rpp-organisation-get-by-sbi',
    url: '/rpp/api/organisation/search',
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
                  _data: organisations,
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
  },
  {
    id: 'rpp-organisation-get-person-summary-by-person-id',
    url: '/rpp/api/organisation/person/:personId/summary',
    method: ['GET'],
    variants: [
      {
        id: 'default',
        type: 'json',
        options: {
          status: 200,
          body: {
            _data: [organisationPersonSummary]
          }
        }
      }
    ]
  },
  {
    id: 'rpp-organisation-applications-get-by-id',
    url: '/rpp/injected-screens-mt/api/organisation/:orgId/applications/appslist',
    method: ['GET'],
    variants: [
      {
        id: 'default',
        type: 'json',
        options: {
          status: 200,
          body: { _data: organisationCSApplications }
        }
      }
    ]
  }
]
