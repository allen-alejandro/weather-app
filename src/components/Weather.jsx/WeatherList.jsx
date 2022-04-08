import React from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { zipCode as zipCodeAtom } from '../../atoms/zipCode.jsx';
import { getFiveDayForecast } from '../../api';
import { MenuItem, TextField, Button, Box, Paper } from '@material-ui/core';

const Weather = () => {
  const [zipCode, setZipCode] = useRecoilState(zipCodeAtom);

  const { isIdle, isLoading, error, data, isFetching } = useQuery(
    ['repoData', zipCode],
    () => {
      return getFiveDayForecast(zipCode).then(({ data }) => data);
    },
    { enabled: !!zipCode }
  );

  if (isIdle) return 'it is idle!';
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {console.log(data.DailyForecasts[0] || '')}
      <Paper elevation={3}>working</Paper>
    </Box>
  );
};

export default Weather;
