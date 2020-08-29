import {projectTypes} from './types';

export function shouldBePublished(projectType) {
  return projectTypes.PACKAGE === projectType || projectTypes.CLI === projectType;
}
