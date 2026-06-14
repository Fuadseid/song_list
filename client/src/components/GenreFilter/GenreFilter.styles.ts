import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #333;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
  min-width: 150px;
`;

export const ResetButton = styled.button`
  padding: 8px 16px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f57c00;
  }
`;

export const ResultCount = styled.span`
  color: #666;
  font-size: 14px;
`;