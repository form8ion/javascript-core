export {default as scaffoldChoice} from './choice-scaffolder.js';
export {DEV_DEPENDENCY_TYPE, PROD_DEPENDENCY_TYPE} from './dependencies/types.js';
export {projectTypes} from './project-types/types.js';
export {default as packageManagers} from './dependencies/package-managers.js';
export {shouldBePublished as projectTypeShouldBePublished} from './project-types/publishable.js';
export {default as dialects} from './dialects.js';
export {determineLtsNodeMajorVersions, determineSupportedNodeMajorVersions} from './node-versions.js';
export {write as writePackageJson, mergeIntoExisting as mergeIntoExistingPackageJson} from './package-json.js';
