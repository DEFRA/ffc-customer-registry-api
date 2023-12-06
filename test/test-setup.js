import { jest } from '@jest/globals'

jest.unstable_mockModule('../app/auth/authenticate.js', () => ({
    getAuth: () => ({ groups: [process.env.ADMIN_AD_GROUP_ID] })
}));

global.jest = jest
