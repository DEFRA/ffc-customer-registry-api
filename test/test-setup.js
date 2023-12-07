import { jest } from '@jest/globals'

// This needs to be done prior to any imports that may reference it
jest.unstable_mockModule('jwks-rsa', () => ({
    __esModule: true,
    default: () => ({
        getSigningKey: () => ({
            getPublicKey: () => 'secret'
        })
    })
}));

const { context } = await import('../app/graphql/context.js')

global.jest = jest
global.fakeContext = {
    ...await context({}),
    authorize: { checkAuthGroup: () => [process.env.ADMIN] }
}
