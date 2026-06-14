import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Song } from '../../types';
import {
  FilterContainer,
  Label,
  Select,
  ResetButton,
  ResultCount,
} from './GenreFilter.styles';

interface GenreFilterProps {
  onFilterChange: (filteredSongs: Song[]) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ onFilterChange }) => {
  const { songs } = useTypedSelector((state) => state.songs);
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  const genres = [...new Set(songs.map((song) => song.genre))].sort();

  useEffect(() => {
    if (selectedGenre) {
      const filtered = songs.filter((song) => song.genre === selectedGenre);
      onFilterChange(filtered);
    } else {
      onFilterChange(songs);
    }
  }, [selectedGenre, songs, onFilterChange]);

  const handleReset = () => {
    setSelectedGenre('');
  };

  const filteredCount = selectedGenre 
    ? songs.filter((song) => song.genre === selectedGenre).length 
    : songs.length;

  return (
    <FilterContainer>
      <Label>Filter by Genre:</Label>
      <Select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
      {selectedGenre && (
        <ResetButton onClick={handleReset}>Reset</ResetButton>
      )}
      <ResultCount>
        {filteredCount} of {songs.length} songs
      </ResultCount>
    </FilterContainer>
  );
};

export default GenreFilter;