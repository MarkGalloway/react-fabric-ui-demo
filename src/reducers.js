import { combineReducers } from 'redux';

import {
  TOGGLE_NAV_ACTIVE, SET_NAV_ACTIVE,
  TOGGLE_FILTERS_ACTIVE, SET_FILTERS_ACTIVE
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


const APPRAISALS_INITIAL_STATE = {
  filtersActive: false
};


function appraisalsReducer(state = APPRAISALS_INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_FILTERS_ACTIVE:
      return { ...state, filtersActive: !state.filtersActive }
    case SET_FILTERS_ACTIVE:
      return { ...state, filtersActive: action.payload }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  app: appReducer,
  appraisals: appraisalsReducer,
});


export default rootReducer;
