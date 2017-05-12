import { createLogic } from 'redux-logic';
import axios from 'axios';
import * as types from './actions';

const mockLoginLogic = createLogic({
  type: types.MOCK_LOGIN,
  latest: true,
  async process({ getState, action }, dispatch, done) {
    const creds = { username: 'foo', password: 'abc123abc' };
    try {
      const response = await axios.post('https://go-pilot.3blades.io/auth/jwt-token-auth/', creds);
      console.log(response); // eslint-disable-line
    } catch (error) {
      // console.error(error);
    }
    done();
  },
});

export default [
  mockLoginLogic,
];
