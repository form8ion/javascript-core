import {assert} from 'chai';
import {DEV_DEPENDENCY_TYPE, PROD_DEPENDENCY_TYPE} from './types';
import managers from './package-managers';

suite('package managers', () => {
  test('that the names match the cli names', () => {
    assert.equal(managers.NPM.name, 'npm');
    assert.equal(managers.YARN.name, 'yarn');
  });

  test('that the installation details are correct for npm', () => {
    const {installationCommand, installationFlags} = managers.NPM;

    assert.equal(installationCommand, 'install');
    assert.equal(installationFlags[DEV_DEPENDENCY_TYPE], 'save-dev');
    assert.equal(installationFlags[PROD_DEPENDENCY_TYPE], 'save-prod');
  });

  test('that the installation details are correct for yarn', () => {
    const {installationCommand, installationFlags} = managers.YARN;

    assert.equal(installationCommand, 'add');
    assert.equal(installationFlags[DEV_DEPENDENCY_TYPE], 'dev');
    assert.equal(installationFlags[PROD_DEPENDENCY_TYPE], 'prod');
  });
});
