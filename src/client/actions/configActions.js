import * as types from './actionTypes';

export const selectMode = (event) => ({
  type: types.SELECT_MODE,
  payload: mode,
});

export const selectEntry = (event) => ({
  type: types.SELECT_ENTRY,
  payload: entry,
});

