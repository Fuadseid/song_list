import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stats, StatsState } from '../../types';

const initialState: StatsState = {
  data: null,
  loading: false,
  error: null,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    fetchStatsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchStatsSuccess: (state, action: PayloadAction<Stats>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchStatsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStatsRequest, fetchStatsSuccess, fetchStatsFailure } = statsSlice.actions;
export default statsSlice.reducer;