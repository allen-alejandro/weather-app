import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Search from './components/Search/Search.jsx';
import Weather from './components/Weather/WeatherList.jsx';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Search />
        <Weather />
        <ReactQueryDevtools />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
