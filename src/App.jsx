import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Search from './components/Search/Search.jsx';
import Weather from './components/Weather/WeatherList.jsx';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from '@material-ui/core';
import { yellow } from '@mui/material/colors';
import '@fontsource/roboto';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Typography variant='h2'>Weather App</Typography>
          <Search />
          <Weather />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
