import axios from 'axios';

import apiKeys from '../apiKeys';

const getTug = vessel => new Promise((resolve, reject) => {
  axios.get(` https://services.marinetraffic.com/api/exportvessel/v:5/${apiKeys.singleVessel.apiKey}/timespan:2/mmsi:${vessel}`)
    .then((result) => {
      if (result.data === '') {
        resolve('noData');
      } else {
        resolve(result.data);
      }
    })
    .catch((error) => {
      reject(error);
    });
});

const getTugExtended = vessel => new Promise((resolve, reject) => {
  axios.get(` https://services.marinetraffic.com/api/exportvessel/v:5/${apiKeys.singleVessel.apiKey}/timespan:1200/msgtype:extended/protocol:json/mmsi:${vessel}`)
    .then((result) => {
      if (result === '') {
        resolve('noData');
      } else {
        resolve(result.data);
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getTug,
  getTugExtended,
};
