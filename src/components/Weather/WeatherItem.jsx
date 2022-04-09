import React from 'react';
import { Box } from '@material-ui/core';

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
      <span>{day}</span>
      <img src={iconSvg} />
      <span>{maxTemp}</span>
    </Box>
  );
};

export default WeatherItem;
