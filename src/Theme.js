import { createTheme } from '@mui/material/styles';

// Light theme 
export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
  palette: {
    mode: 'light', 
    primary: {
      main: '#AF9FCD',
    },
    background: {
      default: '#ffffff',
      gradient: 'linear-gradient(180deg, rgba(215, 199, 244, 0.05) 0%, rgba(151, 133, 186, 0.2) 100%)',
      sidebar: '#D7C7F4', 
      chatScreen: 'linear-gradient(180deg, rgba(215, 199, 244, 0.05) 0%, rgba(151, 133, 186, 0.2) 100%)', 
      appbar : '#f5f2fb',
    }, 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: "500",
          padding: '6px 12px',
          textTransform: 'none',
          borderRadius: "7px",
          whiteSpace: "nowrap",
        },
        containedPrimary: {
          backgroundColor: '#D7C7F4',
          '&:hover': {
            backgroundColor: '#D7C7F4',
          },
        },
      },
    },
  },
});

// Dark theme 
export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
  palette: {
    mode: 'dark', 
    primary: {
      main: '#fff',
    },
    background: {
      default: '#333333',
      paper: '#424242',
      gradient: '#333333',
      sidebar: '#333333',  
      chatScreen: '#333333',
      appbar : '#333333', 
    },
    text: {
      primary: '#ffffff',
    }, 
  },
  components: { 
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: "500",
          padding: '6px 12px',
          textTransform: 'none',
          borderRadius: "7px",
          color: "#ffffff",
          whiteSpace: "nowrap",
        },
        containedPrimary: {
          backgroundColor: '#3C3C3C',  
          '&:hover': {
            backgroundColor: '#555555', 
          },
        },
      },
    },
    MuiTypography:{
      styleOverrides: {
        root: {
        color:"#ffffff"
      }
    }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#fff', 
        },
      },
    },
  }
});
