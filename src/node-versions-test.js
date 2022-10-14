import semver from 'semver';

import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';

import {determineLtsNodeMajorVersions, determineSupportedNodeMajorVersions} from './node-versions';

suite('node versions', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(semver, 'satisfies');
  });

  teardown(() => sandbox.restore());

  suite('LTS major versions', () => {
    test('that the LTS major versions of node are listed', async () => {
      assert.deepEqual(determineLtsNodeMajorVersions(), [14, 16]);
    });

    test('that the list of active LTS versions is filtered by the provided semver range', async () => {
      semver.satisfies.withArgs('12.0.0').returns(false);
      semver.satisfies.withArgs('14.0.0').returns(true);
      semver.satisfies.withArgs('16.0.0').returns(false);

      assert.deepEqual(determineLtsNodeMajorVersions({withinRange: any.string()}), [14]);
    });
  });

  suite('supported major versions', () => {
    test('that the major versions of node are listed', async () => {
      assert.deepEqual(determineSupportedNodeMajorVersions(), [14, 16, 18]);
    });

    test('that the list of supported versions is filtered by the provided semver range', async () => {
      semver.satisfies.withArgs('14.0.0').returns(false);
      semver.satisfies.withArgs('16.0.0').returns(true);
      semver.satisfies.withArgs('18.0.0').returns(false);

      assert.deepEqual(determineSupportedNodeMajorVersions({withinRange: any.string()}), [16]);
    });
  });
});
