import {info, warn} from '@travi/cli-messages';
import execa from '../../thirdparty-wrappers/execa';
import {DEV_DEPENDENCY_TYPE} from './types';
import packageManagers, {getDependencyTypeFlag, getExactFlag, getInstallationCommandFor} from './package-managers';

export default async function (dependencies, dependenciesType, projectRoot, packageManager = packageManagers.NPM) {
  if (dependencies.length) {
    info(`Installing ${dependenciesType} dependencies`, {level: 'secondary'});

    await execa(
      `. ~/.nvm/nvm.sh && nvm use && ${packageManager} ${
        getInstallationCommandFor(packageManager)
      } ${[...new Set(dependencies)].join(' ')} --${getDependencyTypeFlag(packageManager, dependenciesType)}${
        DEV_DEPENDENCY_TYPE === dependenciesType ? ` --${getExactFlag(packageManager)}` : ''
      }`,
      {shell: true, cwd: projectRoot}
    );
  } else warn(`No ${dependenciesType} dependencies to install`);
}
