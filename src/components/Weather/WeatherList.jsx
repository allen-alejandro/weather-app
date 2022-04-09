import React from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { zipCode as zipCodeAtom } from '../../atoms/zipCode.jsx';
import { getFiveDayForecast } from '../../api';
import { MenuItem, TextField, Button, Box, Paper } from '@material-ui/core';
import WeatherItem from './WeatherItem.jsx';
import fakeData from '../../../fakeData/fakeData.js';

const Weather = () => {
  const [zipCode, setZipCode] = useRecoilState(zipCodeAtom);

  const { isIdle, isLoading, error, data, isFetching } = useQuery(
    ['repoData', zipCode],
    () => {
      // return getFiveDayForecast(zipCode).then(({ data }) => data);
      return fakeData;
    },
    { enabled: !!zipCode }
  );

  if (isIdle) return '';
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1vw',
        padding: '5vw',
      }}
    >
      {data.DailyForecasts.map((day) => (
        <WeatherItem
          key={day.Date + day.EpocDate}
          maxTemp={day.Temperature.Maximum.Value}
          date={day.Date}
          icon={day.Day.Icon}
        />
      ))}
    </Box>
  );
};

export default Weather;
