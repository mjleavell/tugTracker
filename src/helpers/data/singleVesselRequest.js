import axios from 'axios';

import apiKeys from '../apiKeys';

const getVessel = vessel => new Promise((resolve, reject) => {
  axios.get(` https://services.marinetraffic.com/api/exportvessel/v:5/${apiKeys.marineTraffic.apiKey}/timespan:20/mmsi:${vessel}`)
    .then((result) => {
      if (result.data === '') {
        resolve('noData');
      } else {
        console.log(result.data);
        resolve(result.data);
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getVessel,
};
