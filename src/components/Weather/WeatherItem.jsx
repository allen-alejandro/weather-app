import React from 'react';
import { Box, Typography } from '@material-ui/core';

const WeatherItem = ({ maxTemp, date, icon }) => {
  let iconSvg = require(`../../assets/${icon}.svg`);
  let longDate = new Date(date);
  let day = longDate.toString().substring(0, 3).toUpperCase();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant='body1' color='inherit'>
        {day}
      </Typography>
      <img src={iconSvg} />
      <Typography variant='body1' color='inherit'>
        {maxTemp}
      </Typography>
    </Box>
  );
};

export default WeatherItem;
