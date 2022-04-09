import { combineReducers } from 'redux';
import subjective from './subjective';
import objective from './objective'
export default combineReducers({
    subjective,
    objective
  });