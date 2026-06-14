import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchStatsRequest } from '../../store/slices/statsSlice';
import {
  Container,
  Title,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  ListsContainer,
  Section,
  SectionTitle,
  List,
  ListItem,
  LoadingText,
} from './StatsDashboard.styles';

const StatsDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { data: stats, loading } = useTypedSelector((state) => state.stats);

  useEffect(() => {
    dispatch(fetchStatsRequest());
  }, [dispatch]);

  if (loading && !stats) {
    return <Container><LoadingText>Loading statistics...</LoadingText></Container>;
  }

  if (!stats) {
    return <Container><LoadingText>No statistics available</LoadingText></Container>;
  }

  return (
    <Container>
      <Title>📊 Music Statistics</Title>
      
      {/* Horizontal stats cards */}
      <StatsGrid>
        <StatCard>
          <StatValue>{stats.totalSongs}</StatValue>
          <StatLabel>Total Songs</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.totalArtists}</StatValue>
          <StatLabel>Total Artists</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.totalAlbums}</StatValue>
          <StatLabel>Total Albums</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.totalGenres}</StatValue>
          <StatLabel>Total Genres</StatLabel>
        </StatCard>
      </StatsGrid>

      {/* Two-column layout for lists */}
      <ListsContainer>
        <Section>
          <SectionTitle>🎸 Songs per Genre</SectionTitle>
          <List>
            {Object.entries(stats.songsPerGenre).map(([genre, count]) => (
              <ListItem key={genre}>
                <span>{genre}</span>
                <span>{count} songs</span>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section>
          <SectionTitle>🎤 Top Artists</SectionTitle>
          <List>
            {Object.entries(stats.songsPerArtist)
              .slice(0, 5)
              .map(([artist, count]) => (
                <ListItem key={artist}>
                  <span>{artist}</span>
                  <span>{count} songs</span>
                </ListItem>
              ))}
          </List>
        </Section>

        <Section>
          <SectionTitle>💿 Albums per Artist</SectionTitle>
          <List>
            {Object.entries(stats.albumsPerArtist)
              .slice(0, 5)
              .map(([artist, count]) => (
                <ListItem key={artist}>
                  <span>{artist}</span>
                  <span>{count} albums</span>
                </ListItem>
              ))}
          </List>
        </Section>

        <Section>
          <SectionTitle>📀 Songs per Album</SectionTitle>
          <List>
            {Object.entries(stats.songsPerAlbum)
              .slice(0, 5)
              .map(([album, count]) => (
                <ListItem key={album}>
                  <span>{album}</span>
                  <span>{count} songs</span>
                </ListItem>
              ))}
          </List>
        </Section>
      </ListsContainer>
    </Container>
  );
};

export default StatsDashboard;