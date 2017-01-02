import Immutable from 'immutable';

export const project = Immutable.Map({
  projectId: '1',
  name: 'Test Project',
  description: 'Test descrption',
  isPrivate: false,
});

export const jobs = Immutable.List([
  Immutable.Map({
    id: '1',
    name: 'Job 1',
    startupScript: 'test-1.sh',
    script: 'test.sh',
    method: 'Test Method',
    auto_restart: true,
    schedule: 'minute',
    envTypeId: Immutable.Map({
      id: '1',
      name: 'EnvType 1',
      imageName: 'Image 1',
      Cmd: 'test'
    }),
    resourcesId: Immutable.Map({
      id: '1',
      name: 'Resource 1',
      cpu: 2,
      memory: 4,
      active: true
    }),
    envVars: Immutable.Map({}),
  })
]);

export const models = Immutable.List([
  Immutable.Map({
    id: '1',
    name: 'Model 1',
    startupScript: 'test-1.sh',
    script: 'test.sh',
    method: 'Test Method',
    envTypeId: Immutable.Map({
      id: '1',
      name: 'EnvType 1',
      imageName: 'Image 1',
      Cmd: 'test'
    }),
    resourcesId: Immutable.Map({
      id: '1',
      name: 'Resource 1',
      cpu: 2,
      memory: 4,
      active: true
    }),
    envVars: Immutable.Map({}),
  })
]);

export const workspaces = Immutable.List([
  Immutable.Map({
    id: '1',
    name: 'Workspace 1',
    startupScript: 'test-1.sh',
    envTypeId: Immutable.Map({
      id: '1',
      name: 'EnvType 1',
      imageName: 'Image 1',
      Cmd: 'test'
    }),
    resourcesId: Immutable.Map({
      id: '1',
      name: 'Resource 1',
      cpu: 2,
      memory: 4,
      active: true
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

export const board = Immutable.List([
  Immutable.Map({
    id: 1,
    name: 'Define Problem',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  }),
  Immutable.Map({
    id: 2,
    name: 'Prepare Data',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  }),
  Immutable.Map({
    id: 3,
    name: 'Model Factory',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  }),
  Immutable.Map({
    id: 4,
    name: 'Tune Algorithms',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  }),
  Immutable.Map({
    id: 5,
    name: 'Visualize',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  })
]);

const INITIAL_STATE = { 
  project,
  jobs,
  models,
  workspaces,
  files,
  board,
};

export default INITIAL_STATE;
