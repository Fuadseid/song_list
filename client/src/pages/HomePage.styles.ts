import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #ffffff;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
  padding: 30px;
  background: #000000;
  border-radius: 8px;
  color: #ffffff;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

export const Subtitle = styled.p`
  margin: 10px 0 0;
  opacity: 0.8;
`;

export const AddButton = styled.button`
  margin-top: 20px;
  padding: 14px 28px;
  background: #000000;
  color: white;
  border: 2px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333333;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const StatsSection = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

export const FilterSection = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

export const SongListSection = styled.div`
  width: 100%;
`;

