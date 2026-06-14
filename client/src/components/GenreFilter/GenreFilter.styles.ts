import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export const Label = styled.label`
  font-weight: 700;
  color: #333;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Select = styled.select`
  padding: 10px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
  
  &:hover {
    border-color: #667eea;
  }
`;

export const ResetButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 152, 0, 0.4);
  }
`;

export const ResultCount = styled.span`
  color: #666;
  font-size: 14px;
  font-weight: 500;
  background: white;
  padding: 8px 16px;
  border-radius: 20px;
`;

