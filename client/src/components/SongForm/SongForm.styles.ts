import styled from '@emotion/styled';

export const Form = styled.form`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: grid;
  gap: 10px;
`;

export const Title = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  text-align: center;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  
  &:hover {
    opacity: 0.9;
  }
`;