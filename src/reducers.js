import { combineReducers } from 'redux';

import * as t from './actionTypes';


const APP_INITIAL_STATE = {
  navActive: false
};

function appReducer(state = APP_INITIAL_STATE, action) {
  switch(action.type) {
    case t.TOGGLE_NAV_ACTIVE:
      return { ...state, navActive: !state.navActive }
    case t.SET_NAV_ACTIVE:
      return { ...state, navActive: action.payload }
    default:
      return state
  }
}


const APPRAISALS_INITIAL_STATE = {
  isLoading: false,
  filtersActive: false,
  appraisals: []
};

function appraisalsReducer(state = APPRAISALS_INITIAL_STATE, action) {
  switch(action.type) {
    case t.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    case t.TOGGLE_FILTERS_ACTIVE:
      return { ...state, filtersActive: !state.filtersActive }
    case t.SET_FILTERS_ACTIVE:
      return { ...state, filtersActive: action.payload }
    case t.SET_APPRAISALS:
      return { ...state, appraisals: action.payload }
    case t.ADD_APPRAISAL:
      return { ...state, appraisals: [ ...state.appraisals, action.payload ] }
    case t.SET_APPRAISAL:
    console.log(action.payload)
      return {
        ...state,
        appraisals: state.appraisals.map(appraisal =>
          appraisal.id === action.payload.id ? { ...action.payload } : appraisal
        )
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  app: appReducer,
  appraisals: appraisalsReducer,
});


export default rootReducer;
