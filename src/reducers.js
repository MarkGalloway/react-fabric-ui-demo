import { combineReducers } from 'redux';

import {
  TOGGLE_NAV_ACTIVE, SET_NAV_ACTIVE
} from './actions';


const APP_INITIAL_STATE = {
  navActive: false
};


function appReducer(state = APP_INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_NAV_ACTIVE:
      return { ...state, navActive: !state.navActive }
    case SET_NAV_ACTIVE:
      return { ...state, navActive: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  app: appReducer,
});


export default rootReducer;
