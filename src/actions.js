import moment from 'moment';

import { uniqueID } from './utils';

export const TOGGLE_NAV_ACTIVE = 'app/TOGGLE_NAV_ACTIVE';
export const SET_NAV_ACTIVE = 'app/SET_NAV_ACTIVE';
export const TOGGLE_FILTERS_ACTIVE = 'appraisals/TOGGLE_FILTERS_ACTIVE';
export const SET_FILTERS_ACTIVE = 'appraisals/SET_FILTERS_ACTIVE';
export const SET_APPRAISALS = 'appraisals/SET_APPRAISALS';
export const UPDATE_APPRAISAL = 'appraisals/UPDATE_APPRAISAL';
export const ADD_APPRAISAL = 'appraisals/ADD_APPRAISAL';

export function toggleNavActive() {
  return {
    type: TOGGLE_NAV_ACTIVE,
    payload: null
  }
}

export function closeNav() {
  return {
    type: SET_NAV_ACTIVE,
    payload: false
  }
}

export function toggleFilters() {
  return {
    type: TOGGLE_FILTERS_ACTIVE,
    payload: null
  }
}

export function closeFilters() {
  return {
    type: SET_FILTERS_ACTIVE,
    payload: false
  }
}

export function setAppraisals(appraisals=[]) {
  return {
    type: SET_APPRAISALS,
    payload: appraisals
  }
}

export function updateAppraisal(appraisal_id, data) {
  return {
    type: UPDATE_APPRAISAL,
    payload: {...data, id: appraisal_id, updated: moment().valueOf()}
  }
}

export function addAppraisal(data) {
  const now = moment().valueOf();

  return {
    type: ADD_APPRAISAL,
    payload: {
      ...data,
      id: uniqueID(),
      created: now,
      updated: now,
      cbb_status: "Incomplete",
      status: "needsNumbers"
    }
  }
}
