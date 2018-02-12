import { takeLatest } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { refreshToken, retrieveFolders } from 'services/googleDrive';

import { PAGE_LOAD } from './constants';
import { retrieveURLsSuccess, retrieveURLsFailure } from './actions';

export function* pageLoaded() {
  try {
    console.log('Page Loaded Sage Triggered');
    const token = yield call(refreshToken);
    console.log('token retrieved:');
    console.log(token.data.access_token);
    const folders = yield call(retrieveFolders(token.data.access_token));
    console.log(folders);
    yield put(retrieveURLsSuccess());
  } catch (err) {
    yield put(retrieveURLsFailure(err));
  }
}

export default function* watchPageLoad() {
  console.log('listening for page load');
  yield takeLatest(PAGE_LOAD, pageLoaded);
  console.log('*******');
}
