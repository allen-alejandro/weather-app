import axios from 'axios';

const baseurl =
  'http://dataservice.accuweather.com/locations/v1/postalcodes/US/search/?q=';
const apikey = process.env.ACCUWEATHER_API;

export const getKey = (zipCode) => {
  return axios.get(`${baseurl}${zipCode}`, {
    params: {
      apikey: apikey,
    },
  });
};
