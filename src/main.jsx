import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: 'GmarketSansMedium, sans-serif',
  },
  palette: {
    primary: {
      main: '#c2d694',
    },
    secondary: {
      main: '#f7be60',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
);
