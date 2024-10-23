import './App.css'; 
import Home from './pages/Home';  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SavedChat from './pages/SavedChat';
import { lightTheme, darkTheme } from './Theme';
import { ThemeProvider } from '@emotion/react';
import { useState, useEffect } from 'react';
import { SnackbarProvider } from 'notistack';


function App() {

  const [darkMode, setDarkMode] = useState(()=>{
    const localtheme = localStorage.getItem("BotAIDarkTheme");
    return localtheme?JSON.parse(localtheme):false;
  });

  useEffect(() => {
    localStorage.setItem("BotAIDarkMode", JSON.stringify(darkMode));
    console.log(darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev); 
  };

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home darkMode={darkMode} toggleTheme={toggleTheme} />,
  }, 
  {
    path: "/saved",
    element: <SavedChat darkMode={darkMode} toggleTheme={toggleTheme}  />,
  }, 
]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <SnackbarProvider>
        <div className="App">
          <RouterProvider router={router} /> 
        </div> 
      </SnackbarProvider>
    </ThemeProvider>

  );
}

export default App;
