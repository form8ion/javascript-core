import {expect, it, describe} from 'vitest';

import {projectTypes} from './types.js';

describe('project types', () => {
  it('should match the types to the available project types', () => {
    expect(projectTypes.PACKAGE).toEqual('Package');
    expect(projectTypes.APPLICATION).toEqual('Application');
    expect(projectTypes.CLI).toEqual('CLI');
    expect(projectTypes.MONOREPO).toEqual('Monorepo');
  });
});
