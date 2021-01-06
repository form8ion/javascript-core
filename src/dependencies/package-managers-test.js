import {assert} from 'chai';
import {DEV_DEPENDENCY_TYPE, PROD_DEPENDENCY_TYPE} from './types';
import managers, {details, getDependencyTypeFlag, getExactFlag, getInstallationCommandFor} from './package-managers';

suite('package managers', () => {
  suite('details', () => {
    test('that the names match the cli names', () => {
      assert.equal(managers.NPM, 'npm');
      assert.equal(managers.YARN, 'yarn');
    });

    test('that the installation details are correct for npm', () => {
      const {installationCommand, installationFlags} = details[managers.NPM];

      assert.equal(installationCommand, 'install');
      assert.equal(installationFlags[DEV_DEPENDENCY_TYPE], 'save-dev');
      assert.equal(installationFlags[PROD_DEPENDENCY_TYPE], 'save-prod');
      assert.equal(installationFlags.exact, 'save-exact');
    });

    test('that the installation details are correct for yarn', () => {
      const {installationCommand, installationFlags} = details[managers.YARN];

      assert.equal(installationCommand, 'add');
      assert.equal(installationFlags[DEV_DEPENDENCY_TYPE], 'dev');
      assert.equal(installationFlags[PROD_DEPENDENCY_TYPE], 'prod');
      assert.equal(installationFlags.exact, 'exact');
    });
  });

  suite('resolvers', () => {
    function assertPackageManagerDetails(manager) {
      const {installationCommand, installationFlags} = details[manager];

      assert.equal(getInstallationCommandFor(manager), installationCommand);
      assert.equal(getDependencyTypeFlag(manager, DEV_DEPENDENCY_TYPE), installationFlags[DEV_DEPENDENCY_TYPE]);
      assert.equal(getDependencyTypeFlag(manager, PROD_DEPENDENCY_TYPE), installationFlags[PROD_DEPENDENCY_TYPE]);
      assert.equal(getExactFlag(manager), installationFlags.exact);
    }

    test('that the proper details are resolved for `npm`', () => assertPackageManagerDetails(managers.NPM));

    test('that the proper details are resolved for `yarn`', () => assertPackageManagerDetails(managers.YARN));
  });
});
