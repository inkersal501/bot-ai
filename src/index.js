import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from 'notistack'
import App from './App'; 
import theme from './Theme';
import { ThemeProvider } from '@emotion/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
 