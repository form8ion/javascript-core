import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as execa from '../../thirdparty-wrappers/execa';
import * as packageManagers from './package-managers';
import {DEV_DEPENDENCY_TYPE} from './types';
import install from './install';

suite('install', () => {
  let sandbox;
  const projectRoot = any.string();
  const packageManger = any.word();
  const installationCommand = any.string();
  const typeFlag = any.word();

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(execa, 'default');
    sandbox.stub(packageManagers, 'getInstallationCommandFor');
    sandbox.stub(packageManagers, 'getDependencyTypeFlag');
    sandbox.stub(packageManagers, 'getExactFlag');

    packageManagers.getInstallationCommandFor.withArgs(packageManger).returns(installationCommand);
  });

  teardown(() => sandbox.restore());

  test('that `npm install` is not run when no dependencies need to be installed', async () => {
    await install([]);

    assert.notCalled(execa.default);
  });

  test('that dependencies are installed', async () => {
    const duplicateDependency = any.word();
    const uniqueDependencies = any.listOf(any.word);
    const dependencies = [duplicateDependency, ...uniqueDependencies, duplicateDependency];
    const dependenciesType = any.word();
    packageManagers.getDependencyTypeFlag.withArgs(packageManger, dependenciesType).returns(typeFlag);

    await install(dependencies, dependenciesType, projectRoot, packageManger);

    assert.calledWith(
      execa.default,
      `. ~/.nvm/nvm.sh && nvm use && ${packageManger} ${installationCommand} ${
        [duplicateDependency, ...uniqueDependencies].join(' ')
      } --${typeFlag}`,
      {shell: true, cwd: projectRoot}
    );
  });

  test('that devDependencies are installed with pinned versions', async () => {
    const duplicateDependency = any.word();
    const uniqueDependencies = any.listOf(any.word);
    const dependencies = [duplicateDependency, ...uniqueDependencies, duplicateDependency];
    const exactFlag = any.word();
    packageManagers.getDependencyTypeFlag.withArgs(packageManger, DEV_DEPENDENCY_TYPE).returns(typeFlag);
    packageManagers.getExactFlag.withArgs(packageManger).returns(exactFlag);

    await install(dependencies, DEV_DEPENDENCY_TYPE, projectRoot, packageManger);

    assert.calledWith(
      execa.default,
      `. ~/.nvm/nvm.sh && nvm use && ${packageManger} ${installationCommand} ${
        [duplicateDependency, ...uniqueDependencies].join(' ')
      } --${typeFlag} --${exactFlag}`,
      {shell: true, cwd: projectRoot}
    );
  });

  test('that the package-manager defaults to `npm` when not specified', async () => {
    const duplicateDependency = any.word();
    const uniqueDependencies = any.listOf(any.word);
    const dependencies = [duplicateDependency, ...uniqueDependencies, duplicateDependency];
    const exactFlag = any.word();
    packageManagers.getDependencyTypeFlag.withArgs(packageManagers.default.NPM, DEV_DEPENDENCY_TYPE).returns(typeFlag);
    packageManagers.getExactFlag.withArgs(packageManagers.default.NPM).returns(exactFlag);
    packageManagers.getInstallationCommandFor.withArgs(packageManagers.default.NPM).returns(installationCommand);

    await install(dependencies, DEV_DEPENDENCY_TYPE, projectRoot);

    assert.calledWith(
      execa.default,
      `. ~/.nvm/nvm.sh && nvm use && ${packageManagers.default.NPM} ${installationCommand} ${
        [duplicateDependency, ...uniqueDependencies].join(' ')
      } --${typeFlag} --${exactFlag}`,
      {shell: true, cwd: projectRoot}
    );
  });
});
