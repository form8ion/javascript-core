import semver from 'semver';

import {afterEach, describe, expect, it, vi} from 'vitest';
import {when} from 'vitest-when';
import any from '@travi/any';

import {determineLtsNodeMajorVersions, determineSupportedNodeMajorVersions} from './node-versions.js';

vi.mock('semver');

describe('node-versions', () => {
  const providedRange = any.string();

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('LTS major versions', () => {
    it('should list the LTS major versions of node', async () => {
      expect(determineLtsNodeMajorVersions()).toEqual([20, 22, 24]);
    });

    it('should filter the list of active LTS versions by the provided semver range', async () => {
      when(semver.satisfies).calledWith('18.0.0', providedRange).thenReturn(false);
      when(semver.satisfies).calledWith('20.0.0', providedRange).thenReturn(true);
      when(semver.satisfies).calledWith('22.0.0', providedRange).thenReturn(true);
      when(semver.satisfies).calledWith('24.0.0', providedRange).thenReturn(true);

      expect(determineLtsNodeMajorVersions({withinRange: providedRange})).toEqual([20, 22, 24]);
    });
  });

  describe('supported major versions', () => {
    it('should list the major versions of node', async () => {
      expect(determineSupportedNodeMajorVersions()).toEqual([20, 22, 24]);
    });

    it('should filter the list of supported versions by the provided semver range', async () => {
      when(semver.satisfies).calledWith('18.0.0', providedRange).thenReturn(false);
      when(semver.satisfies).calledWith('20.0.0', providedRange).thenReturn(true);
      when(semver.satisfies).calledWith('22.0.0', providedRange).thenReturn(true);
      when(semver.satisfies).calledWith('24.0.0', providedRange).thenReturn(true);

      expect(determineSupportedNodeMajorVersions({withinRange: providedRange})).toEqual([20, 22, 24]);
    });
  });
});
