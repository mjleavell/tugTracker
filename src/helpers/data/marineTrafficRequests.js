import axios from 'axios';

import apiKeys from '../apiKeys';

const getTug = vessel => new Promise((resolve, reject) => {
  axios.get(` https://services.marinetraffic.com/api/exportvessel/v:5/${apiKeys.singleVessel.apiKey}/timespan:2/mmsi:${vessel}`)
    .then((result) => {
      if (result.data === '') {
        resolve('noData');
      } else {
        // console.log(result);
        resolve(result.data);
      }
    })
    .catch((error) => {
      reject(error);
    });
});

const getTugExtended = vessel => new Promise((resolve, reject) => {
  axios.get(` https://services.marinetraffic.com/api/exportvessel/v:5/${apiKeys.singleVessel.apiKey}/timespan:48/msgtype:extended/protocol:jsono/mmsi:${vessel}`)
    .then((result) => {
      if (result === '') {
        resolve('noData');
      } else {
        // console.log(result);
        resolve(result);
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
