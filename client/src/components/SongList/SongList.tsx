import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  onEdit?: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { songs, loading } = useTypedSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      dispatch(deleteSongRequest(id));
    }
  };

  if (loading && songs.length === 0) {
    return <LoadingText>Loading songs...</LoadingText>;
  }

  if (songs.length === 0) {
    return <LoadingText>🎵 No songs yet. Add your first song! 🎵</LoadingText>;
  }

  return (
    <Container>
      <h3>📋 Song List</h3>
      {songs.map((song) => (
        <SongCard key={song._id}>
          <SongInfo>
            <Title>{song.title}</Title>
            <Detail>🎤 Artist: {song.artist}</Detail>
            <Detail>💿 Album: {song.album}</Detail>
            <Detail>🎸 Genre: {song.genre}</Detail>
          </SongInfo>
          <Buttons>
            <EditButton onClick={() => onEdit && onEdit(song)}>✏️ Edit</EditButton>
            <DeleteButton onClick={() => handleDelete(song._id)}>🗑️ Delete</DeleteButton>
          </Buttons>
        </SongCard>
      ))}
    </Container>
  );
};

export default SongList;