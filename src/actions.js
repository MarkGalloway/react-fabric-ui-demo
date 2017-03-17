export const TOGGLE_NAV_ACTIVE = 'app/TOGGLE_NAV_ACTIVE';
export const SET_NAV_ACTIVE = 'app/SET_NAV_ACTIVE';
export const TOGGLE_FILTERS_ACTIVE = 'appraisals/TOGGLE_FILTERS_ACTIVE';
export const SET_FILTERS_ACTIVE = 'appraisals/SET_FILTERS_ACTIVE';

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
