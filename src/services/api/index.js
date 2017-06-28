import axios from 'axios';
import has from 'lodash/has';
import set from 'lodash/set';
import { isLoggedIn, getToken } from '../authToken';
import callsList from './callsList';
import * as helpers from './helpers';

const instance = axios.create({
  baseURL: process.env.UI_API_URL,
});

const prepareAxios = ({ history }) => call => (data, options = {}, cancelled$) => instance({
  ...options,
  data,
  method: call.method,
  url: call.path(options.urlParams),
  headers: (isLoggedIn() && { Authorization: `JWT ${getToken()}` }),
  cancelToken: helpers.createCancelToken(cancelled$),
})
.catch(helpers.redirectIfAuthInvalid({ history }))
.catch(helpers.filterCancelledRequests);

const apiCreator = (dependencies) => {
  const axiosWithDependencies = prepareAxios(dependencies);

  const api = callsList.reduce((obj, call, index) => {
    if (!call.name) throw Error(`No name provided for call at index ${index}`);
    if (has(obj, call.name)) throw new Error(`Call already exists for ${call.name}`);
    return set(obj, call.name, axiosWithDependencies(call));
  }, {});

  api.helpers = helpers;

  return api;
};

export default apiCreator;
