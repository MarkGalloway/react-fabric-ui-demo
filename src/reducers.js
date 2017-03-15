import { combineReducers } from 'redux';

import {
  TOGGLE_DRAWER_ACTIVE, SET_DRAWER_ACTIVE
} from './actions';


const APP_INITIAL_STATE = {};


function appReducer(state = APP_INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_DRAWER_ACTIVE:
      return { ...state, drawerActive: !state.drawerActive }
    case SET_DRAWER_ACTIVE:
      return { ...state, drawerActive: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  app: appReducer,
});


export default rootReducer;
