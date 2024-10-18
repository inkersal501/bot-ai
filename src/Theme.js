import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif' 
  },
  palette: {
    primary: {
      main: 'rgba(151, 133, 186, 1)', 
    },
    dark : {
      main : '#102851',
    },
    black : {
      main : '#333',
    },
    light: {
      main: 'rgba(151, 133, 186, .5)',
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
          backgroundColor: 'rgba(215, 199, 244, 1)', 
          '&:hover': {
            backgroundColor: 'rgba(215, 199, 244, 1)', // Hover state color for primary buttons
          },
        },
      },
    },
  },
});

export default theme;
