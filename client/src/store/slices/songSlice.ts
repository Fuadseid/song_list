import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song, SongState } from '../../types';

const initialState: SongState = {
  songs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
      state.loading = false;
      state.songs = action.payload;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    createSongRequest: (state, _action: PayloadAction<Omit<Song, '_id'>>) => {
      state.loading = true;
    },
    createSongSuccess: (state, action: PayloadAction<Song>) => {
      state.loading = false;
      state.songs = [action.payload, ...state.songs];
    },
    updateSongRequest: (state, _action: PayloadAction<{ id: string; song: Partial<Song> }>) => {
      state.loading = true;
    },
    updateSongSuccess: (state, action: PayloadAction<Song>) => {
      state.loading = false;
      const index = state.songs.findIndex(song => song._id === action.payload._id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSongRequest: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    deleteSongSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.songs = state.songs.filter(song => song._id !== action.payload);
    },
    songFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
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
} = songSlice.actions;

export default songSlice.reducer;