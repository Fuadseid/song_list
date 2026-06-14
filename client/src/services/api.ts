import axios from 'axios';
import { Song, Stats, ApiResponse } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchSongs = () => api.get<ApiResponse<Song[]>>('/songs');
export const createSong = (song: Omit<Song, '_id'>) => api.post<ApiResponse<Song>>('/songs', song);
export const updateSong = (id: string, song: Partial<Song>) => api.put<ApiResponse<Song>>(`/songs/${id}`, song);
export const deleteSong = (id: string) => api.delete<ApiResponse<null>>(`/songs/${id}`);
export const fetchStats = () => api.get<ApiResponse<Stats>>('/songs/stats');