const INITIAL_STATE = {
  project: {
    projectId: '1',
    name: 'Test Project',
    description: 'Test descrption',
    isPrivate: false,
  },
  files: [
    {
      fileId: '1',
      filePath: 'test.txt',
      encoding: 'utf-8',
      autherEmail: 'test@test.com',
      authorName: 'Tester',
      content: 'Test content',
      size: 1024,
      public: true,
    },
    {
      fileId: '2',
      filePath: 'test-2.txt',
      encoding: 'utf-8',
      autherEmail: 'test2@test.com',
      authorName: 'Tester 2',
      content: 'Test content 2',
      size: 1024,
      public: true,
    }
  ],
  boards: [
    {
      id: 1,
      name: 'Define Problem',
      elements: [
        { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
        { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
        { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
      ],
    },
    {
      id: 2,
      name: 'Prepare Data',
      elements: [
        { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
        { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
        { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
      ],
    },
    {
      id: 3,
      name: 'Model Factory',
      elements: [
        { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
        { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
        { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
      ],
    },
    {
      id: 4,
      name: 'Tune Algorithms',
      elements: [
        { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
        { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
        { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
      ],
    },
    {
      id: 5,
      name: 'Visualize',
      elements: [
        { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
        { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
        { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
      ],
    }
  ],
};

export default INITIAL_STATE;
