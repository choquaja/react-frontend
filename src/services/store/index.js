import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer, { logic } from '../../reducer';
import apiCreator from '../../services/api';
import { extract } from './helpers';

export const INITIAL_STATE = {};
export const history = createBrowserHistory();
export const api = apiCreator({ history });

// Remove trailing slash on paths
history.listen((location) => {
  if (location.pathname.endsWith('/')) history.replace(location.pathname.slice(0, -1));
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const isProd = process.env.NODE_ENV === 'production';
const logicMiddleware = createLogicMiddleware(logic, { api, history, extract });
const middlewares = [
  (!isProd && createLogger({
    collapsed: (_, action) => !action.error,
  })),
  logicMiddleware,
].filter(Boolean);

export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export const addLogic = logicMiddleware.addLogic;
