import { handleActions, createAction as createActionCreator } from 'redux-actions';

const payload = x => x;
const meta = (x, y) => y;

export const createAction = (
  type,
  payloadCreator = payload,
  metaCreator = meta,
) => createActionCreator(type, payloadCreator, metaCreator);

export const INITIAL_DATA_STATE = {
  loading: false,
  data: null,
  error: null,
};

export const createDataReducer = (
  TYPE_REQUEST,
  TYPE_SUCCESS,
  TYPE_FAIL,
  TYPE_RESET = 'ignore',
) => (reducer = {}, initialState = {}) => handleActions({
  [TYPE_REQUEST](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [TYPE_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  },
  [TYPE_FAIL](state, action) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
  [TYPE_RESET]() {
    return { ...INITIAL_DATA_STATE, ...initialState };
  },
  ...reducer,
}, { ...INITIAL_DATA_STATE, ...initialState });

export const resetReducer = TYPE_RESET => reducer => (state, action) => {
  if (action.type === TYPE_RESET) {
    state = undefined; // eslint-disable-line
  }
  return reducer(state, action);
};