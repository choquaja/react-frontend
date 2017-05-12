import Immutable from 'immutable';

export const collaborators = Immutable.List([
  Immutable.Map({
    id: '1',
    owner: false,
    joined: 'Mon Jan 01 2017 01:01:01',
    username: 'bobshirley',
    firstName: 'Bob',
    lastName: 'Shirley',
    email: 'bob@shirleysolutions.com',
  }),
  Immutable.Map({
    id: '2',
    owner: false,
    joined: 'Mon Jan 02 2017 02:02:02',
    username: 'tfoster',
    firstName: 'Tina',
    lastName: 'Foster',
    email: 'tfoster@bigdatawizardry.io',
  }),
]);

export const settings = Immutable.Map({
  id: '1',
  name: 'MonaLisa',
  description: 'An introductory project',
  isPrivate: false,
});

export const resources = Immutable.List([
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

export const files = Immutable.List([
  Immutable.Map({
    fileId: '1',
    filePath: 'test.txt',
    encoding: 'utf-8',
    autherEmail: 'test@test.com',
    authorName: 'Tester',
    content: 'Test content',
    size: 1024,
    public: true,
  }),
  Immutable.Map({
    fileId: '2',
    filePath: 'test-2.txt',
    encoding: 'utf-8',
    autherEmail: 'test2@test.com',
    authorName: 'Tester 2',
    content: 'Test content 2',
    size: 1024,
    public: true,
  }),
]);

export const home = Immutable.List([
  settings,
]);

const INITIAL_STATE = {
  scenes: {
    home,
    project: {
      settings,
      resources,
      files,
      collaborators,
    },
  },
};

export default INITIAL_STATE;
