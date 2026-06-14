import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 20px;
`;

export const SongCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

export const SongInfo = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  margin: 0 0 5px 0;
  color: #333;
`;

export const Detail = styled.p`
  margin: 3px 0;
  color: #666;
  font-size: 14px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const EditButton = styled(Button)`
  background-color: #4CAF50;
  color: white;
`;

export const DeleteButton = styled(Button)`
  background-color: #f44336;
  color: white;
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 40px;
`;