import React from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { zipCode as zipCodeAtom } from '../../atoms/zipCode.jsx';
import { getFiveDayForecast } from '../../api';
import { getTenDayForecast } from '../../api';
import { Box, Paper, Typography } from '@material-ui/core';
import WeatherItem from './WeatherItem.jsx';
import { makeStyles } from '@material-ui/core/styles';
import fakeData from '../../../fakeData/fakeData.js';

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
      return getFiveDayForecast(zipCode).then(({ data }) => {
        data.DailyForecasts = data.DailyForecasts.slice(0, 7);
        return data;
      });
    },
    { enabled: !!zipCode }
  );

  if (isIdle) return '';
  if (isLoading)
    return (
      <Typography variant='h6' color='inherit' align='center'>
        Loading...
      </Typography>
    );
  if (error)
    return (
      <Typography variant='h3' color='inherit' align='center'>
        Please Try Again...
      </Typography>
    );

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
      <Typography variant='h4' color='inherit' gutterBottom={true}>
        Next 7 days...
      </Typography>

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
            key={day.Date + day.EpochDate}
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
