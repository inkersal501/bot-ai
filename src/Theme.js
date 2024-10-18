import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif' 
  },
  palette: {
    primary: {
      main: '#AF9FCD', 
    },
    dark : {
      main : '#3C3C3C',
    }, 
    light: {
      main: '#D7C7F4',
    }
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
          color: "#333",
          whiteSpace:"nowrap",
        },
        containedPrimary: {
          backgroundColor: '#D7C7F4', 
          '&:hover': {
            backgroundColor: '#D7C7F4', // Hover state color for primary buttons
          },
        },
      },
    },
  },
});

export default theme;
