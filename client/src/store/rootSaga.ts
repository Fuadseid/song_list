import { all } from 'redux-saga/effects';
import { songSaga } from './sagas/songSaga';
import { statsSaga } from './sagas/statsSaga';

export default function* rootSaga() {
  yield all([songSaga(), statsSaga()]);
}