import { createAction as createActionCreator } from 'redux-actions';

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
