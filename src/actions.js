import * as t from './actionTypes';

export function toggleNavActive() {
  return {
    type: t.TOGGLE_NAV_ACTIVE,
    payload: null
  }
}

export function closeNav() {
  return {
    type: t.SET_NAV_ACTIVE,
    payload: false
  }
}

export function setIsLoading(isLoading) {
  return {
    type: t.SET_IS_LOADING,
    payload: isLoading
  }
}

export function toggleFilters() {
  return {
    type: t.TOGGLE_FILTERS_ACTIVE,
    payload: null
  }
}

export function closeFilters() {
  return {
    type: t.SET_FILTERS_ACTIVE,
    payload: false
  }
}

export function setAppraisals(appraisals=[]) {
  return {
    type: t.SET_APPRAISALS,
    payload: appraisals
  }
}

export function setAppraisal(appraisalId, data) {
  return {
    type: t.SET_APPRAISAL,
    payload: {...data, id: appraisalId}
  }
}

export function updateAppraisal(appraisalId, data) {
  return {
    type: t.UPDATE_APPRAISAL,
    payload: {...data, id: appraisalId}
  }
}

export function addAppraisal(appraisal) {
  return {
    type: t.ADD_APPRAISAL,
    payload: appraisal
  }
}

export function fetchAppraisals() {
  return {
    type: t.FETCH_APPRAISALS,
    payload: null
  }
}

export function createAppraisal(data) {
  return {
    type: t.CREATE_APPRAISAL,
    payload: data
  }
}
