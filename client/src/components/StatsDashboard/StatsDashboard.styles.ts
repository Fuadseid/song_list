import styled from '@emotion/styled';

export const Container = styled.div`
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin: 0 0 15px 0;
  color: #333;
  text-align: center;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
`;

export const StatCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const StatValue = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #667eea;
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h4`
  color: #333;
  margin-bottom: 10px;
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
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  
  span:first-of-type {
    font-weight: bold;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  padding: 20px;
  color: #666;
`;