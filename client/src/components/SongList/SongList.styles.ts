import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 20px;
`;

export const SongCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-color: #000000;
  }
`;

export const SongInfo = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  margin: 0 0 5px 0;
  color: #000000;
  font-weight: 600;
`;

export const Detail = styled.p`
  margin: 3px 0;
  color: #666666;
  font-size: 14px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  background: #ffffff;
  
  &:hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
`;

export const EditButton = styled(Button)`
  background: #000000;
  color: #ffffff;
  border: none;
  
  &:hover {
    background: #333333;
  }
`;

export const DeleteButton = styled(Button)`
  background: #ffffff;
  color: #000000;
  border: 1px solid #cccccc;
  
  &:hover {
    background: #f5f5f5;
    border-color: #000000;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #666666;
  padding: 40px;
`;

