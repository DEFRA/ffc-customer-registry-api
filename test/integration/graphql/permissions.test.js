import { graphql } from 'graphql'

import { schema } from '../../../app/graphql/server.js'
import { fakeContext } from '../../test-setup.js'

describe('Query.permissionGroups', () => {
  it('should return permissions', async () => {
    await graphql({
      source: `#graphql
        query PermissionGroups($customerId: String!, $businessId: String!) {
          permissionGroups {
            id
            name
            permissions {
              functions
              level
              active(customerId: $customerId, businessId: $businessId)
            }
          }
        }
      `,
      variableValues: {
        customerId: 'mockCustomerId',
        businessId: 'mockBusinessId'
      },
      schema,
      contextValue: fakeContext
    })

    // expect(result).toEqual({
    //   data: {
    //     permissionGroups: new Permissions().getPermissionGroups()
    //   }
    // })
  })
})
