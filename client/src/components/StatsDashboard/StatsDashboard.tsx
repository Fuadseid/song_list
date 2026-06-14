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
    </Container>
  );
};

export default StatsDashboard;