/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  PAGE_LOAD,
  URL_SUCCESS,
  URL_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function pageLoadAction() {
  console.log('pageLoadAction');
  return {
    type: PAGE_LOAD,
  };
}

export function retrieveURLsSuccess() {
  console.log('retrieveURLsSuccess');
  return {
    type: URL_SUCCESS,
  };
}

export function retrieveURLsFailure() {
  console.log('retrieveURLsFailure');
  return {
    type: URL_FAIL,
  };
}
