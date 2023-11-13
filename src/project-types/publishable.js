import {projectTypes} from './types.js';

export function shouldBePublished(projectType) {
  return projectTypes.PACKAGE === projectType || projectTypes.CLI === projectType;
}
