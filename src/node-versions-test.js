import semver from 'semver';

import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';

import {determineActiveLtsNodeMajorVersions} from './node-versions';

suite('node versions', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(semver, 'satisfies');
  });

  teardown(() => sandbox.restore());

  test('that the currently active LTS major versions of node are listed', async () => {
    assert.deepEqual(determineActiveLtsNodeMajorVersions(), [12, 14, 16]);
  });

  test('that the list of active LTS versions is filtered by the provided semver range', async () => {
    semver.satisfies.withArgs('12.0.0').returns(false);
    semver.satisfies.withArgs('14.0.0').returns(true);
    semver.satisfies.withArgs('16.0.0').returns(false);

    assert.deepEqual(determineActiveLtsNodeMajorVersions({withinRange: any.string()}), [14]);
  });
});
