import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from 'notistack'
import App from './App'; 
import theme from './Theme';
import { ThemeProvider } from '@emotion/react';
import SavedChat from './pages/SavedChat';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "/saved",
    element: <SavedChat />,
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
 