import {assert} from 'chai';
import managers from './package-managers';

suite('pacakge managers', () => {
  test('that the names match the cli names', () => {
    assert.equal(managers.NPM, 'npm');
    assert.equal(managers.YARN, 'yarn');
  });
});
