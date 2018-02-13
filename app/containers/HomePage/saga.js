import { takeLatest } from 'redux-saga';
import { all, take, call, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { refreshToken, retrieveFolders, retrieveImages } from 'services/googleDrive';

import { PAGE_LOAD } from './constants';
import { retrieveURLsSuccess, retrieveURLsFailure } from './actions';

export function* pageLoaded() {
  try {
    console.log('Page Loaded Saga Triggered');
    const tokenResponse = yield call(refreshToken);
    const token = tokenResponse.data.access_token;
    const childrenResponse = yield call(retrieveFolders, token);
    const folders = childrenResponse.data.items;
    console.log('folders:', folders);
    const images = yield all(folders.map((folder) => {
      return call(retrieveImages, token, folder.id)
    }));
    const imageUrls = images.map((imageSet) => {
      return imageSet.map((image) => `https://drive.google.com/uc?export=view&id=${image.id}`);
    });
    yield put(retrieveURLsSuccess(imageUrls));
  } catch (err) {
    yield put(retrieveURLsFailure(err));
  }
}

export default function* watchPageLoad() {
  console.log('listening for page load');
  yield takeLatest(PAGE_LOAD, pageLoaded);
  console.log('*******');
}
