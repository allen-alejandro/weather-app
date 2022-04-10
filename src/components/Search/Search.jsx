import React from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { zipCode as zipCodeAtom } from '../../atoms/zipCode.jsx';
import { zipCodeInput as zipCodeInputAtom } from '../../atoms/zipCodeInput.jsx';
import { getFiveDayForecast } from '../../api';
import { MenuItem, TextField, Button, Box, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      background: 'white',
    },
  },
}));

const Search = () => {
  const classes = useStyles();
  const [zipCode, setZipCode] = useRecoilState(zipCodeAtom);
  const [zipCodeInput, setZipCodeInput] = useRecoilState(zipCodeInputAtom);

  const onSubmit = (e) => {
    if (!zipCodeInput || zipCodeInput === '') return;
    setZipCode(zipCodeInput);
    setZipCodeInput('');
  };

  const onInputChange = (e) => {
    const reg = /^[0-9\b]+$/;
    if (e.target.value === '' || reg.test(e.target.value)) {
      setZipCodeInput(e.target.value);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={zipCodeInput}
          className={classes.root}
          sx={{
            background: 'rgb(232, 241, 250)',
          }}
        />
        <Button
          variant='contained'
          onClick={onSubmit}
          color='primary'
          type='submit'
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Search;
