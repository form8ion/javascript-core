import {assert} from 'chai';
import any from '@travi/any';
import {projectTypes} from './types';
import {shouldBePublished} from './publishable';

suite('publishable project-type', () => {
  test('that `true` is returned for `Package` type projects', () => {
    assert.isTrue(shouldBePublished(projectTypes.PACKAGE));
  });

  test('that `true` is returned for `CLI` type projects', () => {
    assert.isTrue(shouldBePublished(projectTypes.CLI));
  });

  test('that `false` is returned for projects that are not `CLI` or `Package` type', () => {
    assert.isFalse(shouldBePublished(any.word()));
  });
});
