import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTugs = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tugs.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const tugObject = result.data;
      const tugsArray = [];
      if (tugObject != null) {
        Object.keys(tugObject).forEach((tugId) => {
          tugObject[tugId].id = tugId;
          tugsArray.push(tugObject[tugId]);
        });
      }
      console.log(tugsArray);
      resolve(tugsArray);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getTugs,
};
