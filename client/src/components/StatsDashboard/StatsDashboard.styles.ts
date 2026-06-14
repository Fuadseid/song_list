import styled from '@emotion/styled';

export const Container = styled.div`
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 0;
  width: 100%;
`;

export const Title = styled.h3`
  margin: 0 0 15px 0;
  color: #333;
  text-align: center;
`;

// Horizontal grid for stats cards
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatValue = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #667eea;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 8px;
`;

// Two-column layout for lists
export const ListsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 8px;
`;

export const SectionTitle = styled.h4`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 16px;
  border-bottom: 2px solid #667eea;
  padding-bottom: 5px;
  display: inline-block;
`;

export const List = styled.div`
  display: grid;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  background: white;
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  
  span:first-of-type {
    font-weight: 600;
    color: #333;
  }
  
  span:last-of-type {
    color: #667eea;
    font-weight: 600;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  padding: 20px;
  color: #666;
`;

