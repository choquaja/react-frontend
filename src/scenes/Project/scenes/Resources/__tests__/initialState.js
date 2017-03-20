import Immutable from 'immutable';

export default Immutable.List([
  Immutable.Map({
    id: '1',
    name: 'Job 1',
    type: 'job',
    startupScript: 'test-1.sh',
    script: 'test.sh',
    method: 'Test Method',
    auto_restart: true,
    schedule: 'minute',
    envTypeId: Immutable.Map({
      id: '1',
      name: 'EnvType 1',
      imageName: 'Image 1',
      Cmd: 'test',
    }),
    resourcesId: Immutable.Map({
      id: '1',
      name: 'Resource 1',
      cpu: 2,
      memory: 4,
      active: true,
    }),
    envVars: Immutable.Map({
      TEST_1: 'test_1',
    }),
  }),
  Immutable.Map({
    id: '2',
    type: 'model',
    name: 'Model 1',
    startupScript: 'test-1.sh',
    script: 'test.sh',
    method: 'Test Method',
    envTypeId: Immutable.Map({
      id: '1',
      name: 'EnvType 1',
      imageName: 'Image 1',
      Cmd: 'test',
    }),
    resourcesId: Immutable.Map({
      id: '1',
      name: 'Resource 1',
      cpu: 2,
      memory: 4,
      active: true,
    }),
    envVars: Immutable.Map({}),
  }),
  Immutable.Map({
    id: '3',
    type: 'workspace',
    name: 'Workspace 1',
    startupScript: 'test-1.sh',
    envTypeId: Immutable.Map({
      id: '1',
      name: 'EnvType 1',
      imageName: 'Image 1',
      Cmd: 'test',
    }),
    resourcesId: Immutable.Map({
      id: '1',
      name: 'Resource 1',
      cpu: 2,
      memory: 4,
      active: true,
    }),
    envVars: Immutable.Map({}),
  }),
]);
