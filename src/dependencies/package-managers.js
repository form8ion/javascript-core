import {DEV_DEPENDENCY_TYPE, PROD_DEPENDENCY_TYPE} from './types';

const packageManagers = {
  NPM: 'npm',
  YARN: 'yarn'
};

export const details = {
  [packageManagers.NPM]: {
    installationCommand: 'install',
    installationFlags: {
      [DEV_DEPENDENCY_TYPE]: `save-${DEV_DEPENDENCY_TYPE}`,
      [PROD_DEPENDENCY_TYPE]: `save-${PROD_DEPENDENCY_TYPE}`
    }
  },
  [packageManagers.YARN]: {
    installationCommand: 'add',
    installationFlags: {
      [DEV_DEPENDENCY_TYPE]: DEV_DEPENDENCY_TYPE,
      [PROD_DEPENDENCY_TYPE]: PROD_DEPENDENCY_TYPE
    }
  }
};

export default packageManagers;
