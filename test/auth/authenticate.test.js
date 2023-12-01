import { getADGroups } from '../../app/auth/authenticate.js'
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

jest.mock('jsonwebtoken');
jest.mock('jwks-rsa');

describe('getADGroups', () => {
    const mockAuthHeader = 'Bearer mockToken';
    const mockDecodedToken = {
        header: { alg: 'RS256', kid: 'mockKeyId' },
        payload: {},
        signature: 'mockSignature',
    };
    const mockKey = {
        getPublicKey: jest.fn(() => 'mockPublicKey'),
    };

    beforeEach(() => {
        jwksClient.mockImplementation(() => {
            return {
                getSigningKey: jest.fn().mockResolvedValue(mockKey),
            };
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return an empty array when no authHeader is provided', async () => {
        expect(await getADGroups('')).toEqual([]);
        expect(await getADGroups(null)).toEqual([]);
    });

    test('should return decoded groups when token is valid', async () => {
        jwt.decode.mockReturnValue(mockDecodedToken);
        jwt.verify.mockReturnValue({ groups: ['Group1', 'Group2'] });

        expect(await getADGroups(mockAuthHeader)).toEqual(['Group1', 'Group2']);
    });

    test('should return an empty array when token cannot be decoded', async () => {
        jwt.decode.mockReturnValue(null);

        expect(await getADGroups(mockAuthHeader)).toEqual([]);
    });

    test('should return an empty array when JWKS client fails to get signing key', async () => {
        const client = jwksClient();
        client.getSigningKey.mockRejectedValue(new Error('Key fetch failed'));

        expect(await getADGroups(mockAuthHeader)).toEqual([]);
    });

    test('should return an empty array when token verification fails', async () => {
        jwt.decode.mockReturnValue(mockDecodedToken);
        jwt.verify.mockImplementation(() => {
            throw new Error('Invalid token');
        });

        expect(await getADGroups(mockAuthHeader)).toEqual([]);
    });
});