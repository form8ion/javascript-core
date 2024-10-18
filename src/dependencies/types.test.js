import {expect, it, describe} from 'vitest';

import {DEV_DEPENDENCY_TYPE, PROD_DEPENDENCY_TYPE} from './types.js';

describe('dependency types', () => {
  it('should match the types to the installation flags', () => {
    expect(DEV_DEPENDENCY_TYPE).toEqual('dev');
    expect(PROD_DEPENDENCY_TYPE).toEqual('prod');
  });
});
