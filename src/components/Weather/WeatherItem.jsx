import React from 'react';
import { Box } from '@material-ui/core';

const WeatherItem = ({ maxTemp, date, icon }) => {
  let iconSvg = require(`../../assets/${icon}.svg`);
  let longDate = new Date(date);
  let day = longDate.toString().substring(0, 3);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1vw',
        padding: '5vw',
        textAlign: 'center',
      }}
    >
      <img src={iconSvg} />
      <span>{day}</span>
      <span>{maxTemp}</span>
    </Box>
  );
};

export default WeatherItem;
