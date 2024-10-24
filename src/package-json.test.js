import {fileTypes, mergeIntoExistingConfigFile, writeConfigFile} from '@form8ion/core';

import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import {mergeIntoExisting, write} from './package-json.js';

vi.mock('@form8ion/core');

describe('package.json config', () => {
  const projectRoot = any.string();
  const config = any.simpleObject;

  it('should write the provided config', async () => {
    await write({projectRoot, config});

    expect(writeConfigFile).toHaveBeenCalledWith({
      format: fileTypes.JSON,
      name: 'package',
      path: projectRoot,
      config
    });
  });

  it('should merge the provided config into the existing file', async () => {
    await mergeIntoExisting({projectRoot, config});

    expect(mergeIntoExistingConfigFile).toHaveBeenCalledWith({
      format: fileTypes.JSON,
      name: 'package',
      path: projectRoot,
      config
    });
  });
});
