/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  PAGE_LOAD,
} from './constants';

const initialState = fromJS({
  activePage: '',
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case PAGE_LOAD:
      console.log('PAGE LOAD REDUCED');
      return state
          .set('activePage', 'true');
    default:
      return state;
  }
}

export default homePageReducer;
