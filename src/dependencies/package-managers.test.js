import {expect, it, describe} from 'vitest';

import managers from './package-managers.js';

describe('package managers', () => {
  it('should match the names with the cli names', () => {
    expect(managers.NPM).toEqual('npm');
    expect(managers.YARN).toEqual('yarn');
  });
});
