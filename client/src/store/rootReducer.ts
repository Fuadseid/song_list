import { combineReducers } from '@reduxjs/toolkit';
import songReducer from './slices/songSlice';
import statsReducer from './slices/statsSlice';

const rootReducer = combineReducers({
  songs: songReducer,
  stats: statsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;