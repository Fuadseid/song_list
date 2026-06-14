export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Stats {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsPerGenre: Record<string, number>;
  songsPerArtist: Record<string, number>;
  songsPerAlbum: Record<string, number>;
  albumsPerArtist: Record<string, number>;
}

export interface SongState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

export interface StatsState {
  data: Stats | null;
  loading: boolean;
  error: string | null;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}