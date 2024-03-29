import semver from 'semver';

export function determineLtsNodeMajorVersions({withinRange} = {}) {
  return [14, 16, 18, 20].filter(majorVersion => {
    if (!withinRange) return true;

    return semver.satisfies(`${majorVersion}.0.0`, withinRange);
  });
}

export function determineSupportedNodeMajorVersions({withinRange} = {}) {
  return [14, 16, 18, 20, 21].filter(majorVersion => {
    if (!withinRange) return true;

    return semver.satisfies(`${majorVersion}.0.0`, withinRange);
  });
}
