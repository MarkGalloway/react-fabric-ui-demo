export const TOGGLE_NAV_ACTIVE = 'app/TOGGLE_NAV_ACTIVE';
export const SET_NAV_ACTIVE = 'app/SET_NAV_ACTIVE';

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
