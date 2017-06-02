import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer, { logic } from '../../reducer';
import apiCreator from '../../services/api';

export const history = createBrowserHistory();
export const api = apiCreator({ history });

const isProd = process.env.NODE_ENV === 'production';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const middlewares = [
  (!isProd && createLogger()),
  createLogicMiddleware(logic, { api, history }),
].filter(Boolean);

export const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
};

export const INITIAL_STATE = {};
