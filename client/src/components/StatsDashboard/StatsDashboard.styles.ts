import styled from '@emotion/styled';

export const Container = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 0;
  width: 100%;
  border: 1px solid #e0e0e0;
`;

export const Title = styled.h3`
  margin: 0 0 15px 0;
  color: #000000;
  text-align: center;
  font-weight: 600;
`;

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
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  }
`;

export const StatValue = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #000000;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #666666;
  margin-top: 8px;
`;

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
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

export const SectionTitle = styled.h4`
  margin: 0 0 10px 0;
  color: #000000;
  font-size: 16px;
  border-bottom: 2px solid #000000;
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
  background: #fafafa;
  padding: 8px 12px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  border: 1px solid #eeeeee;
  
  span:first-of-type {
    font-weight: 600;
    color: #000000;
  }
  
  span:last-of-type {
    color: #666666;
    font-weight: 500;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  padding: 20px;
  color: #666666;
`;

