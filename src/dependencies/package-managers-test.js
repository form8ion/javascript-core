import {assert} from 'chai';
import {DEV_DEPENDENCY_TYPE, PROD_DEPENDENCY_TYPE} from './types';
import {details} from './package-managers';

suite('pacakge managers', () => {
  test('that the names match the cli names', () => {
    assert.equal({
      NPM: 'npm',
      YARN: 'yarn'
    }.NPM, 'npm');
    assert.equal({
      NPM: 'npm',
      YARN: 'yarn'
    }.YARN, 'yarn');
  });

  test('that the installation details are correct for npm', () => {
    const {installationCommand, installationFlags} = details[{
      NPM: 'npm',
      YARN: 'yarn'
    }.NPM];

    assert.equal(installationCommand, 'install');
    assert.equal(installationFlags[DEV_DEPENDENCY_TYPE], 'save-dev');
    assert.equal(installationFlags[PROD_DEPENDENCY_TYPE], 'save-prod');
  });

  test('that the installation details are correct for yarn', () => {
    const {installationCommand, installationFlags} = details[{
      NPM: 'npm',
      YARN: 'yarn'
    }.YARN];

    assert.equal(installationCommand, 'add');
    assert.equal(installationFlags[DEV_DEPENDENCY_TYPE], 'dev');
    assert.equal(installationFlags[PROD_DEPENDENCY_TYPE], 'prod');
  });
});
