// #### Import
// remark-usage-ignore-next 4
import stubbedFs from 'mock-fs';
import td from 'testdouble';

td.replace('execa');

const {scaffoldChoice} = require('./lib/index.js');

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await scaffoldChoice(
    {foo: {scaffolder: options => options}},
    'foo',
    {bar: 'baz'}
  );
})();
