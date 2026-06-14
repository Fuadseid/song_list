import React from 'react';
import { Toaster } from 'react-hot-toast';
import styled from '@emotion/styled';

const StyledToaster = styled(Toaster)`
  .Toastify__toast--success {
    background: #4caf50;
  }
  .Toastify__toast--error {
    background: #f44336;
  }
`;

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <StyledToaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
            padding: '12px',
            borderRadius: '8px',
          },
          success: {
            icon: '✅',
            style: {
              background: '#4caf50',
            },
          },
          error: {
            icon: '❌',
            style: {
              background: '#f44336',
            },
          },
        }}
      />
    </>
  );
};

export default ToastProvider;