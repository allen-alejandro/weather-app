import axios from 'axios';

const baseurl = 'http://dataservice.accuweather.com/';
const zipCodeUrl = 'locations/v1/postalcodes/US/search/?q=';
const fiveDayUrl = 'forecasts/v1/daily/5day/';
const tenDayUrl = 'forecasts/v1/daily/10day/';
const apikey = process.env.ACCUWEATHER_API;

const getKey = (zipCode) => {
  return axios.get(`${baseurl}${zipCodeUrl}${zipCode}`, {
    params: {
      apikey: apikey,
    },
  });
};

export const getFiveDayForecast = (zipCode) => {
  return getKey(zipCode)
    .then(({ data }) => {
      return axios.get(`${baseurl}${fiveDayUrl}${data[0].Key}`, {
        params: {
          apikey: apikey,
        },
      });
    })
    .catch((err) => console.log(err));
};

export const getTenDayForecast = (zipCode) => {
  return getKey(zipCode)
    .then(({ data }) => {
      return axios.get(`${baseurl}${tenDayUrl}${data[0].Key}`, {
        params: {
          apikey: apikey,
        },
      });
    })
    .catch((err) => console.log(err));
};
