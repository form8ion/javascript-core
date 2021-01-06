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
      [PROD_DEPENDENCY_TYPE]: `save-${PROD_DEPENDENCY_TYPE}`,
      exact: 'save-exact'
    }
  },
  [packageManagers.YARN]: {
    installationCommand: 'add',
    installationFlags: {
      [DEV_DEPENDENCY_TYPE]: DEV_DEPENDENCY_TYPE,
      [PROD_DEPENDENCY_TYPE]: PROD_DEPENDENCY_TYPE,
      exact: 'exact'
    }
  }
};

export function getInstallationCommandFor(manager) {
  return details[manager].installationCommand;
}

export function getDependencyTypeFlag(manager, type) {
  return details[manager].installationFlags[type];
}

export function getExactFlag(manager) {
  return details[manager].installationFlags.exact;
}

export default packageManagers;
