import {expect, it, describe} from 'vitest';
import any from '@travi/any';

import {projectTypes} from './types.js';
import {shouldBePublished} from './publishable.js';

describe('publishable project-type', () => {
  it('should return `true` for `Package` type projects', () => {
    expect(shouldBePublished(projectTypes.PACKAGE)).toBe(true);
  });

  it('should return `true` for `CLI` type projects', () => {
    expect(shouldBePublished(projectTypes.CLI)).toBe(true);
  });

  it('should return `false` for projects that are not `CLI` or `Package` type', () => {
    expect(shouldBePublished(any.word())).toBe(false);
  });
});
