import { combineReducers } from 'redux';
import speakerReducer from './speaker';
import apiUrlReducer from './apiUrl';

export default combineReducers({
  speaker: speakerReducer,
  apiUrl: apiUrlReducer,
});