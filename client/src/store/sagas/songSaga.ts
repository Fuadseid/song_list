import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as api from '../../services/api';
import { Song } from '../../types';
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongRequest,
  createSongSuccess,
  updateSongRequest,
  updateSongSuccess,
  deleteSongRequest,
  deleteSongSuccess,
  songFailure,
} from '../slices/songSlice';
import { fetchStatsRequest } from '../slices/statsSlice';

function* fetchSongs(): Generator<any, void, AxiosResponse<{ success: boolean; data: Song[] }>> {
  try {
    const response = yield call(api.fetchSongs);
    yield put(fetchSongsSuccess(response.data.data));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* createSong(action: ReturnType<typeof createSongRequest>): Generator<any, void, AxiosResponse<{ success: boolean; data: Song }>> {
  try {
    const response = yield call(api.createSong, action.payload);
    yield put(createSongSuccess(response.data.data));
    yield put(fetchStatsRequest());
  } catch (error: any) {
    yield put(songFailure(error.message));
  }
}

function* updateSong(action: ReturnType<typeof updateSongRequest>): Generator<any, void, AxiosResponse<{ success: boolean; data: Song }>> {
  try {
    const response = yield call(api.updateSong, action.payload.id, action.payload.song);
    yield put(updateSongSuccess(response.data.data));
    yield put(fetchStatsRequest());
  } catch (error: any) {
    yield put(songFailure(error.message));
  }
}

function* deleteSong(action: ReturnType<typeof deleteSongRequest>): Generator<any, void, AxiosResponse<{ success: boolean; data: null }>> {
  try {
    yield call(api.deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));
    yield put(fetchStatsRequest());
  } catch (error: any) {
    yield put(songFailure(error.message));
  }
}

export function* songSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongs);
  yield takeLatest(createSongRequest.type, createSong);
  yield takeLatest(updateSongRequest.type, updateSong);
  yield takeLatest(deleteSongRequest.type, deleteSong);
}