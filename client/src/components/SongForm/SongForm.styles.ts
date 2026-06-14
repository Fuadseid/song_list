import styled from '@emotion/styled';

export const Form = styled.form`
  display: grid;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #000000;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconSpan = styled.span`
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }
  
  &:hover {
    border-color: #666666;
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #000000;
  }
  
  &:hover {
    border-color: #666666;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 12px 24px;
  background: #000000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background: #333333;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 12px 24px;
  background: #ffffff;
  color: #000000;
  border: 1px solid #cccccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f5f5f5;
    border-color: #000000;
  }
`;

