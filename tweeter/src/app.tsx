import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
import { router } from './main';

const App: React.FC = () => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
