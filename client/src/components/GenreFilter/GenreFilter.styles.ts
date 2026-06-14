import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  border: 1px solid #e0e0e0;
`;

export const Label = styled.label`
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Select = styled.select`
  padding: 10px 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #000000;
  }
  
  &:hover {
    border-color: #000000;
  }
`;

export const ResetButton = styled.button`
  padding: 10px 20px;
  background: #000000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background: #333333;
    transform: translateY(-1px);
  }
`;

export const ResultCount = styled.span`
  color: #666666;
  font-size: 14px;
  font-weight: 500;
  background: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
`;

