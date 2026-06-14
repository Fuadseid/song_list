import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSongRequest, updateSongRequest } from '../../store/slices/songSlice';
import { Song } from '../../types';
import {
  Form,
  Title,
  Input,
  Select,
  SubmitButton,
} from './SongForm.styles';

const genres = ['Rock', 'Pop', 'Jazz', 'Hip Hop', 'Classical', 'Electronic', 'R&B', 'Country', 'Metal', 'Folk'];

interface SongFormProps {
  editingSong?: Song | null;
  setEditingSong?: (song: Song | null) => void;
}

const SongForm: React.FC<SongFormProps> = ({ editingSong, setEditingSong }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: genres[0],
  });

  useEffect(() => {
    if (editingSong) {
      setFormData({
        title: editingSong.title,
        artist: editingSong.artist,
        album: editingSong.album,
        genre: editingSong.genre,
      });
    }
  }, [editingSong]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSong) {
      dispatch(updateSongRequest({ id: editingSong._id, song: formData }));
      if (setEditingSong) setEditingSong(null);
    } else {
      dispatch(createSongRequest(formData));
    }
    setFormData({ title: '', artist: '', album: '', genre: genres[0] });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>{editingSong ? '✏️ Edit Song' : '➕ Add New Song'}</Title>
      <Input
        name="title"
        placeholder="Song Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <Input
        name="artist"
        placeholder="Artist"
        value={formData.artist}
        onChange={handleChange}
        required
      />
      <Input
        name="album"
        placeholder="Album"
        value={formData.album}
        onChange={handleChange}
        required
      />
      <Select name="genre" value={formData.genre} onChange={handleChange} required>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
      <SubmitButton type="submit">
        {editingSong ? 'Update Song' : 'Add Song'}
      </SubmitButton>
    </Form>
  );
};

export default SongForm;