import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchSongsRequest, deleteSongRequest } from '../../store/slices/songSlice';
import { Song } from '../../types';
import {
  Container,
  SongCard,
  SongInfo,
  Title,
  Detail,
  Buttons,
  EditButton,
  DeleteButton,
  LoadingText,
} from './SongList.styles';

interface SongListProps {
  onEdit: (song: Song) => void;
  filteredSongs?: Song[];  
}

const SongList: React.FC<SongListProps> = ({ onEdit, filteredSongs }) => {
  const dispatch = useDispatch();
  const { songs, loading } = useTypedSelector((state) => state.songs);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const displaySongs = filteredSongs && filteredSongs.length > 0 ? filteredSongs : songs;

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      setDeletingId(id);
      try {
        await dispatch(deleteSongRequest(id));
        toast.success('Song deleted successfully!');
      } catch (error) {
        toast.error('Failed to delete song');
      } finally {
        setDeletingId(null);
      }
    }
  };

  if (loading && songs.length === 0) {
    return <LoadingText>Loading songs...</LoadingText>;
  }

  if (displaySongs.length === 0) {
    return <LoadingText>🎵 No songs yet. Click "Add New Song" to get started! 🎵</LoadingText>;
  }

  return (
    <Container>
      <h3>📋 Song List ({displaySongs.length} songs)</h3>
      {displaySongs.map((song) => (
        <SongCard key={song._id}>
          <SongInfo>
            <Title>{song.title}</Title>
            <Detail>🎤 Artist: {song.artist}</Detail>
            <Detail>💿 Album: {song.album}</Detail>
            <Detail>🎸 Genre: {song.genre}</Detail>
          </SongInfo>
          <Buttons>
            <EditButton onClick={() => onEdit(song)}>✏️ Edit</EditButton>
            <DeleteButton 
              onClick={() => handleDelete(song._id)}
              disabled={deletingId === song._id}
            >
              {deletingId === song._id ? 'Deleting...' : '🗑️ Delete'}
            </DeleteButton>
          </Buttons>
        </SongCard>
      ))}
    </Container>
  );
};

export default SongList;