import {assert} from 'chai';
import {determineActiveLtsNodeMajorVersions} from './node-versions';

suite('node versions', () => {
  test('that the currently active LTS major versions of node are listed', async () => {
    assert.deepEqual(determineActiveLtsNodeMajorVersions(), [12, 14, 16]);
  });
});
