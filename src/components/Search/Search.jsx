import React from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { zipCode as zipCodeAtom } from '../../atoms/zipCode.jsx';
import { zipCodeInput as zipCodeInputAtom } from '../../atoms/zipCodeInput.jsx';
import { getFiveDayForecast } from '../../api';
import { MenuItem, TextField, Button, Box, Paper } from '@material-ui/core';

const Search = () => {
  const [zipCode, setZipCode] = useRecoilState(zipCodeAtom);
  const [zipCodeInput, setZipCodeInput] = useRecoilState(zipCodeInputAtom);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!zipCodeInput || zipCodeInput === '') return;
    setZipCode(zipCodeInput);
    setZipCodeInput('');
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
            onChange={(e) => setZipCodeInput(e.target.value)}
            value={zipCodeInput}
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
