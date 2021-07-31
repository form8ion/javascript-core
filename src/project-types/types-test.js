import {assert} from 'chai';
import {projectTypes} from './types';

suite('project types', () => {
  test('that the types match the available project types', () => {
    assert.equal(projectTypes.PACKAGE, 'Package');
    assert.equal(projectTypes.APPLICATION, 'Application');
    assert.equal(projectTypes.CLI, 'CLI');
    assert.equal(projectTypes.MONOREPO, 'Monorepo');
  });
});
