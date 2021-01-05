import {DEV_DEPENDENCY_TYPE, PROD_DEPENDENCY_TYPE} from './types';

const packageManagers = {
  NPM: {
    name: 'npm',
    installationCommand: 'install',
    installationFlags: {
      [DEV_DEPENDENCY_TYPE]: `save-${DEV_DEPENDENCY_TYPE}`,
      [PROD_DEPENDENCY_TYPE]: `save-${PROD_DEPENDENCY_TYPE}`
    }
  },
  YARN: {
    name: 'yarn',
    installationCommand: 'add',
    installationFlags: {
      [DEV_DEPENDENCY_TYPE]: DEV_DEPENDENCY_TYPE,
      [PROD_DEPENDENCY_TYPE]: PROD_DEPENDENCY_TYPE
    }
  }
};

export default packageManagers;
