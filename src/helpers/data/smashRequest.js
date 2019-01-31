import tugRequests from './tugRequests';
import marineTrafficRequests from './marineTrafficRequests';

const getTugInfo = uid => new Promise((resolve, reject) => {
  const allTugs = [];
  tugRequests.getTugs(uid).then((tugs) => {
    tugs.forEach((singleTug) => {
      marineTrafficRequests.getTugExtended(singleTug.mmsi).then((tugInfo) => {
        if (tugInfo.length !== 0) {
          // tugInfo returns array of data
          tugInfo.forEach((item) => {
            console.log(item);
            // const updatedTug = {
            //   captain: singleTug.captain,
            //   homeport: singleTug.homeport,
            //   currentLat: parseFloat(item[1]),
            //   currentLon: parseFloat(item[2]),
            //   id: singleTug.id,
            //   inEdit: singleTug.inEdit,
            //   mmsi: singleTug.mmsi,
            //   name: singleTug.name,
            //   speed: parseFloat(item[3]),
            //   lastPort: item[20],
            //   nextPort: item[31],
            //   uid: singleTug.uid,
            // };
            const updatedTug = { ...singleTug };
            allTugs.push(updatedTug);
          });
        } else {
          allTugs.push(singleTug);
        }
      });
    });
    console.log(allTugs);
    resolve(allTugs);
  })
    .catch(err => reject(err));
});

export default { getTugInfo };
