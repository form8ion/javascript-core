// #### Import
// remark-usage-ignore-next 4
import stubbedFs from 'mock-fs';
import td from 'testdouble';

td.replace('execa');

const {
  scaffoldUnitTesting,
  scaffoldChoice,
  installDependencies,
  PROD_DEPENDENCY_TYPE,
  questionNames
} = require('./lib/index.cjs');

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await scaffoldUnitTesting({
    projectRoot: process.cwd(),
    frameworks: {
      Mocha: {scaffolder: options => options},
      Jest: {scaffolder: options => options}
    },
    visibility: 'Public',
    vcs: {host: 'GitHub', owner: 'foo', name: 'bar'},
    decisions: {[questionNames.UNIT_TEST_FRAMEWORK]: 'Mocha'}
  });

  await scaffoldChoice(
    {foo: {scaffolder: options => options}},
    'foo',
    {bar: 'baz'}
  );

  await installDependencies(['foo', 'bar'], PROD_DEPENDENCY_TYPE);
})();
