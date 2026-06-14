import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as api from '../../services/api';
import { Stats } from '../../types';
import { fetchStatsRequest, fetchStatsSuccess, fetchStatsFailure } from '../slices/statsSlice';

function* fetchStats(): Generator<any, void, AxiosResponse<{ success: boolean; data: Stats }>> {
  try {
    const response = yield call(api.fetchStats);
    yield put(fetchStatsSuccess(response.data.data));
  } catch (error: any) {
    yield put(fetchStatsFailure(error.message));
  }
}

export function* statsSaga() {
  yield takeLatest(fetchStatsRequest.type, fetchStats);
}