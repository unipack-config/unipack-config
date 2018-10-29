import initialState from './initialState';
import { SELECT_MODE, SELECT_ENTRY, SELECT_OUTPUT_PATH, SELECT_OUTPUT_FILENAME } from '../actions/actionTypes';

export default function stuff(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SELECT_MODE:
      newState = action.payload;
      console.log('SELECT_MODE Action')
      return newState;
    case SELECT_ENTRY:
      newState = action.payload;
      console.log('SELECT_ENTRY Action')
      return newState;
    default:
      return state;
  }
}