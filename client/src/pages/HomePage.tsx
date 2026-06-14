import React, { useState } from 'react';
import styled from '@emotion/styled';
import SongList from '../components/SongList/SongList';
import SongForm from '../components/SongForm/SongForm';
import StatsDashboard from '../components/StatsDashboard/StatsDashboard';
import GenreFilter from '../components/GenreFilter/GenreFilter';
import { Song } from '../types';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  margin: 10px 0 0;
  opacity: 0.9;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div``;

const RightColumn = styled.div``;

const HomePage: React.FC = () => {
  const [editingSong, setEditingSong] = useState<Song | null>(null);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  const handleEdit = (song: Song) => {
    setEditingSong(song);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // FIXED: This function now receives Song[] (filtered songs) not a string
  const handleFilterChange = (filtered: Song[]) => {
    setFilteredSongs(filtered);
  };

  return (
    <Container>
      <Header>
        <Title>🎵 Song Management System</Title>
        <Subtitle>Manage your music collection with ease</Subtitle>
      </Header>

      <Content>
        <LeftColumn>
          <SongForm editingSong={editingSong} setEditingSong={setEditingSong} />
          <GenreFilter onFilterChange={handleFilterChange} />
        </LeftColumn>

        <RightColumn>
          <StatsDashboard />
        </RightColumn>
      </Content>
      
      <SongList onEdit={handleEdit} />
    </Container>
  );
};

export default HomePage;