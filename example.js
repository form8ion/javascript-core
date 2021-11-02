// #### Import
// remark-usage-ignore-next 4
import stubbedFs from 'mock-fs';
import td from 'testdouble';

td.replace('execa');

const {scaffoldChoice, installDependencies, PROD_DEPENDENCY_TYPE} = require('./lib/index.cjs');

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await scaffoldChoice(
    {foo: {scaffolder: options => options}},
    'foo',
    {bar: 'baz'}
  );

  await installDependencies(['foo', 'bar'], PROD_DEPENDENCY_TYPE);
})();
