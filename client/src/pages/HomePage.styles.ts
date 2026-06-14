import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

export const Subtitle = styled.p`
  margin: 10px 0 0;
  opacity: 0.9;
`;

export const AddButton = styled.button`
  margin-top: 20px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Statistics section - full width horizontal
export const StatsSection = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

// Filter section - below statistics
export const FilterSection = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

// Song list section
export const SongListSection = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: block;
`;

