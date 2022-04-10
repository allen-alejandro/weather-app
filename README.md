# Weather App

## Installation

**\*Note**: You will need to supply valid keys for the Accuweather api.\*

1. Rename `.example.env` to `.env`—add your key to this file.
2. Run `npm install` from the root directory
3. Run `npm run build-dev` to build webpack
4. Run `npm start` to start the server
5. Navigate a browser to `http://localhost:3000`
6. Have fun

## PLEASE NOTE:

- Accuweather free api only returns 5 day forecast
- This app assumes you have the free tier and shows a 5 day forecast
- To display 7 days worth of forecasts, you must pay for the Prime tier

### If you have the Prime tier, update the following:

1. Navigate to `src/components/Weather/WeatherList.jsx`
2. Jump to line `33`
3. Replace `getFiveDayForecast` with `getTenDayForecast`
