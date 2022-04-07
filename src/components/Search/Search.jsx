import React, { Component, useState } from 'react';
import { MenuItem, TextField, Button, Box, Paper } from '@material-ui/core';

const Search = () => {
  const [location, setLocation] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === '') return;
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
            onChange={(e) => setLocation(e.target.value)}
            value={location}
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
