import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTugs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tugs.json`).then((result) => {
    const tugObject = result.data;
    const tugsArray = [];
    if (tugObject != null) {
      Object.keys(tugObject).forEach((tugId) => {
        tugObject[tugId].id = tugId;
        tugsArray.push(tugObject[tugId]);
      });
    }
    resolve(tugsArray);
  })
    .catch((error) => {
      reject(error);
    });
});

const getSingleTug = tugId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tugs/${tugId}.json`).then((result) => {
    const singleTug = result.data;
    singleTug.id = tugId;
    resolve(singleTug);
  })
    .catch((error) => {
      reject(error);
    });
});

const deleteTug = tugId => axios.delete(`${baseUrl}/tugs/${tugId}.json`);

const addTug = tugObject => axios.post(`${baseUrl}/tugs.json`, tugObject);

const patchInEdit = (tugId, inEdit) => axios.patch(`${baseUrl}/tugs/${tugId}.json`, { inEdit });

const patchCaptain = (tugId, captain) => axios.patch(`${baseUrl}/tugs/${tugId}.json`, { captain });

export default {
  getTugs,
  getSingleTug,
  deleteTug,
  addTug,
  patchInEdit,
  patchCaptain,
};
