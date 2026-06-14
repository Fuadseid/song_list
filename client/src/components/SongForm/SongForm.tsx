import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { createSongRequest, updateSongRequest } from '../../store/slices/songSlice';
import { Song } from '../../types';
import {
  Form,
  FormGroup,
  Label,
  IconSpan,
  Input,
  Select,
  ButtonGroup,
  SubmitButton,
  CancelButton,
} from './SongForm.styles';

const genres = [
  { value: 'Rock', icon: '🎸', color: '#e74c3c' },
  { value: 'Pop', icon: '🎤', color: '#3498db' },
  { value: 'Jazz', icon: '🎷', color: '#f39c12' },
  { value: 'Hip Hop', icon: '🎧', color: '#2ecc71' },
  { value: 'Classical', icon: '🎻', color: '#9b59b6' },
  { value: 'Electronic', icon: '🎹', color: '#1abc9c' },
  { value: 'R&B', icon: '🎵', color: '#e67e22' },
  { value: 'Country', icon: '🤠', color: '#f1c40f' },
  { value: 'Metal', icon: '🤘', color: '#2c3e50' },
  { value: 'Folk', icon: '🪕', color: '#d35400' },
];

interface SongFormProps {
  editingSong?: Song | null;
  onClose: () => void;
  onSuccess: () => void;
}

const SongForm: React.FC<SongFormProps> = ({ editingSong, onClose, onSuccess }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: 'Rock',
  });
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      toast.error('Please enter a song title');
      return;
    }
    if (!formData.artist.trim()) {
      toast.error('Please enter an artist name');
      return;
    }
    if (!formData.album.trim()) {
      toast.error('Please enter an album name');
      return;
    }
    
    setLoading(true);
    
    try {
      if (editingSong) {
        await dispatch(updateSongRequest({ id: editingSong._id, song: formData }));
        toast.success('✨ Song updated successfully!');
      } else {
        await dispatch(createSongRequest(formData));
        toast.success('🎵 Song added successfully!');
      }
      onSuccess();
      onClose();
    } catch (error) {
      toast.error('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const selectedGenre = genres.find(g => g.value === formData.genre);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label><IconSpan>🎵</IconSpan> Song Title</Label>
        <Input
          name="title"
          placeholder="Enter song title..."
          value={formData.title}
          onChange={handleChange}
          required
          autoFocus
        />
      </FormGroup>

      <FormGroup>
        <Label><IconSpan>🎤</IconSpan> Artist</Label>
        <Input
          name="artist"
          placeholder="Enter artist name..."
          value={formData.artist}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label><IconSpan>💿</IconSpan> Album</Label>
        <Input
          name="album"
          placeholder="Enter album name..."
          value={formData.album}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label><IconSpan>🎸</IconSpan> Genre</Label>
        <Select 
          name="genre" 
          value={formData.genre} 
          onChange={handleChange}
          borderColor={selectedGenre?.color}
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.icon} {genre.value}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonGroup>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? '⏳ Saving...' : (editingSong ? '✏️ Update Song' : '➕ Add Song')}
        </SubmitButton>
        <CancelButton type="button" onClick={onClose}>
          Cancel
        </CancelButton>
      </ButtonGroup>
    </Form>
  );
};

export default SongForm;