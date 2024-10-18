import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);
 