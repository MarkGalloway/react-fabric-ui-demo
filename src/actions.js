import moment from 'moment';

export const TOGGLE_DRAWER_ACTIVE = 'app/TOGGLE_DRAWER_ACTIVE';
export const SET_DRAWER_ACTIVE = 'app/SET_DRAWER_ACTIVE';

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER_ACTIVE,
    payload: null
  }
}

export function closeDrawer() {
  return {
    type: SET_DRAWER_ACTIVE,
    payload: false
  }
}
