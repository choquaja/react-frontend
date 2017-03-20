import Immutable from 'immutable';

export default Immutable.List([
  Immutable.Map({
    isOwner: false,
    joined: 'Mon Jan 01 2017 01:01:01',
    userId: '1',
    username: 'tester1',
    firstName: 'TestTwo',
    lastName: 'TesterTwo',
    email: 'tester1@test.com',
  }),
  Immutable.Map({
    isOwner: false,
    joined: 'Mon Jan 02 2017 02:02:02',
    userId: '2',
    username: 'tester2',
    firstName: 'TestTwo',
    lastName: 'TesterTwoTwo',
    email: 'tester@test.com',
  }),
]);
