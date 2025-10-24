import semver from 'semver';

export function determineLtsNodeMajorVersions({withinRange} = {}) {
  return [20, 22, 24].filter(majorVersion => {
    if (!withinRange) return true;

    return semver.satisfies(`${majorVersion}.0.0`, withinRange);
  });
}

export function determineSupportedNodeMajorVersions({withinRange} = {}) {
  return [20, 22, 24].filter(majorVersion => {
    if (!withinRange) return true;

    return semver.satisfies(`${majorVersion}.0.0`, withinRange);
  });
}
