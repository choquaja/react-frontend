import updateProjectLogic from './components/UpdateProjectForm/logic';
import toggleProjectVisibilityLogic from './components/ToggleProjectVisibilityForm/logic';
import deleteProjectLogic from './components/DeleteProjectForm/logic';

export const settingsLogic = [
  ...updateProjectLogic,
  ...toggleProjectVisibilityLogic,
  ...deleteProjectLogic,
];
