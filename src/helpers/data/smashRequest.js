/* eslint-disable prefer-destructuring */
import tugRequests from './tugRequests';
import marineTrafficRequests from './marineTrafficRequests';

const getTugInfo = uid => new Promise((resolve, reject) => {
  const allTugs = [];
  let tugCounter = 0;
  let tugsLength = 0;
  tugRequests.getTugs(uid).then((tugs) => {
    tugsLength = tugs.length;
    tugs.forEach((singleTug) => {
      marineTrafficRequests.getTugExtended(singleTug.mmsi).then((tugInfo) => {
        const updatedTug = { ...singleTug };
        if (tugInfo.errors.length === 1) { // if api runs out, home port is pushed
          console.log(tugInfo);
          allTugs.push(singleTug);
          tugCounter += 1;
        } else if (tugInfo.length !== 0) {
          console.log(tugInfo);
          tugInfo.forEach((item) => {
            updatedTug.currentLat = parseFloat(item[1]);
            updatedTug.currentLon = parseFloat(item[2]);
            updatedTug.speed = parseFloat(item[3]);
            updatedTug.lastPort = item[20];
            updatedTug.nextPort = item[31];
            allTugs.push(updatedTug);
            tugCounter += 1;
          });
        } else if (tugInfo.length === 0) {
          console.log(tugInfo);
          allTugs.push(singleTug);
          tugCounter += 1;
        }
        if (tugsLength === tugCounter) {
          resolve(allTugs);
        }
      });
    });
  })
    .catch(err => reject(console.error(err), err));
});

export default { getTugInfo };
