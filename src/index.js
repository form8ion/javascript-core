export {default as scaffoldChoice} from './choice-scaffolder';
export {default as validateOptions} from './options-validator';
export {DEV_DEPENDENCY_TYPE, PROD_DEPENDENCY_TYPE} from './dependencies/types';
export {projectTypes} from './project-types/types';
export {default as packageManagers} from './dependencies/package-managers';
export {shouldBePublished as projectTypeShouldBePublished} from './project-types/publishable';
export {default as dialects} from './dialects';
export {determineLtsNodeMajorVersions} from './node-versions';
export {write as writePackageJson, mergeIntoExisting as mergeIntoExistingPackageJson} from './package-json';
