import {satisfies} from 'semver';

export function determineActiveLtsNodeMajorVersions({withinRange} = {}) {
  return [12, 14, 16].filter(majorVersion => {
    if (!withinRange) return true;

    return satisfies(`${majorVersion}.0.0`, withinRange);
  });
}
