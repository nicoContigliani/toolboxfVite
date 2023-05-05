/* eslint-disable no-unused-vars */
import useAxios from '../hooks/useAxios';

import { describe, test, expect } from '@jest/globals';

describe('useAxios component', () => {
    test('should fetch data correctly from the API', async () => {

        const [data] = await useAxios({ url: 'http://localhost:3001/files/data', body: null, params: null, method: 'get', Token: 'aSuperSecretKey' });
      
        expect(data).toBeDefined();
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);
      });    
});