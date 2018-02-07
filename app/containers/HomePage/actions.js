/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  PAGE_LOAD,
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
