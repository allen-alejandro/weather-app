import React from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { zipCode as zipCodeAtom } from '../../atoms/zipCode.jsx';
import { getFiveDayForecast } from '../../api';
import { MenuItem, TextField, Button, Box, Paper } from '@material-ui/core';
import WeatherItem from './WeatherItem.jsx';
import fakeData from '../../../fakeData/fakeData.js';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '80vw',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '55vw',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '45vw',
    },
  },
}));

const Weather = () => {
  const classes = useStyles();
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
    <Paper
      elevation={3}
      style={{
        margin: 'auto',
        padding: '1em',
        borderRadius: '1em',
      }}
      className={classes.root}
    >
      <h2>Next 5 days...</h2>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-around',
          margin: 'auto',
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
    </Paper>
  );
};

export default Weather;
