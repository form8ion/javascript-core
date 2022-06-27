import semver from 'semver';

export function determineActiveLtsNodeMajorVersions({withinRange} = {}) {
  return [12, 14, 16].filter(majorVersion => {
    if (!withinRange) return true;

    return semver.satisfies(`${majorVersion}.0.0`, withinRange);
  });
}
