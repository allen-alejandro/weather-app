import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import Search from './components/Search/Search.jsx';

const App = () => {
  return (
    <RecoilRoot>
      <Search />
    </RecoilRoot>
  );
};

export default hot(App);
