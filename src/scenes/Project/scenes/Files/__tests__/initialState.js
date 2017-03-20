import Immutable from 'immutable';

export default Immutable.List([
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
