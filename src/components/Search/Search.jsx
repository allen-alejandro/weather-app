import React from 'react';
import { useRecoilState } from 'recoil';
import { zipCode as zipCodeAtom } from '../../atoms/zipCode.jsx';
import { getFiveDayForecast } from '../../api';

import { MenuItem, TextField, Button, Box, Paper } from '@material-ui/core';

const Search = () => {
  const [zipCode, setZipCode] = useRecoilState(zipCodeAtom);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!zipCode || zipCode === '') return;
    getFiveDayForecast(zipCode)
      .then(({ data }) =>
        console.log(data.DailyForecasts, '<<<<><><<><><><><><><<><<><><')
      )
      .catch((err) => console.log(err));
    setZipCode('');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1vw',
            padding: '5vw',
          }}
        >
          <TextField
            id='zip-code'
            label='Zip Code'
            variant='filled'
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode}
          />
          <Button variant='contained' onClick={onSubmit}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Search;
