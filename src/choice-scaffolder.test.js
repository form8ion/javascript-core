import {expect, it, describe, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'vitest-when';

import scaffoldTypeChoice from './choice-scaffolder.js';

describe('type choice scaffolder', () => {
  it('should scaffold the chosen type', async () => {
    const choice = any.word();
    const options = any.simpleObject();
    const results = any.simpleObject();
    const chosenScaffolder = vi.fn();
    const choices = {...any.simpleObject(), [choice]: {scaffold: chosenScaffolder}};
    when(chosenScaffolder).calledWith(options).thenResolve(results);

    expect(await scaffoldTypeChoice(choices, choice, options)).toEqual(results);
  });

  it('should not result in error when choosing a type without a defined scaffolder', async () => {
    expect(await scaffoldTypeChoice(any.simpleObject(), any.string())).toEqual({});
  });
});
