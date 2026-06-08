import {fileTypes, writeConfigFile, mergeIntoExistingConfigFile, loadConfigFile} from '@form8ion/core';

export function write({projectRoot, config}) {
  return writeConfigFile({format: fileTypes.JSON, name: 'package', path: projectRoot, config});
}

export async function mergeIntoExisting({projectRoot, config}) {
  return mergeIntoExistingConfigFile({format: fileTypes.JSON, name: 'package', path: projectRoot, config});
}

export async function load({projectRoot}) {
  return loadConfigFile({format: fileTypes.JSON, name: 'package', path: projectRoot});
}
