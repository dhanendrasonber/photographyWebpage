import { takeLatest } from 'redux-saga';
import { take, call, put, cancel, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { PAGE_LOAD } from './constants';

export function* pageLoaded(action) {
  try {
    console.log('Page Loaded Sage Triggered');
  } catch (err) {
    console.log(err);
  }
}

export default function* watchPageLoad() {
  console.log('listening for page load');
  yield takeLatest(PAGE_LOAD, pageLoaded);
  yield take(LOCATION_CHANGE);
  console.log('*******');
}
