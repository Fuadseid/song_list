import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import SongList from '../components/SongList/SongList';
import SongForm from '../components/SongForm/SongForm';
import StatsDashboard from '../components/StatsDashboard/StatsDashboard';
import GenreFilter from '../components/GenreFilter/GenreFilter';
import Modal from '../components/Modal/Modal';
import ToastProvider from '../components/Toast/ToastProvider';
import { fetchSongsRequest } from '../store/slices/songSlice';
import { Song } from '../types';
import {
  Container,
  Header,
  Title,
  Subtitle,
  AddButton,
  StatsSection,
  FilterSection,
  SongListSection,
} from './HomePage.styles';

const HomePageContent: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSong, setEditingSong] = useState<Song | null>(null);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  const handleAddClick = () => {
    setEditingSong(null);
    setIsModalOpen(true);
  };

  const handleEdit = (song: Song) => {
    setEditingSong(song);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingSong(null);
  };

  const handleSuccess = () => {
    dispatch(fetchSongsRequest());
    toast.success('Song list updated!');
  };

  const handleFilterChange = (filtered: Song[]) => {
    setFilteredSongs(filtered);
  };

  return (
    <Container>
      <Header>
        <Title>🎵 Song Management System</Title>
        <Subtitle>Manage your music collection with ease</Subtitle>
        <AddButton onClick={handleAddClick}>+ Add New Song</AddButton>
      </Header>

      {/* Statistics Section - Full width horizontal */}
      <StatsSection>
        <StatsDashboard />
      </StatsSection>

      {/* Filter Section - Below statistics */}
      <FilterSection>
        <GenreFilter onFilterChange={handleFilterChange} />
      </FilterSection>

      {/* Song List Section */}
      <SongListSection>
        <SongList onEdit={handleEdit} filteredSongs={filteredSongs} />
      </SongListSection>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingSong ? '✏️ Edit Song' : '➕ Add New Song'}
      >
        <SongForm
          editingSong={editingSong}
          onClose={handleCloseModal}
          onSuccess={handleSuccess}
        />
      </Modal>
    </Container>
  );
};

const HomePage: React.FC = () => {
  return (
    <ToastProvider>
      <HomePageContent />
    </ToastProvider>
  );
};

export default HomePage;