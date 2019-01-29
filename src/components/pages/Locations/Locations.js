import React from 'react';
import Map from '../../Map/Map';
import tugRequests from '../../../helpers/data/tugRequests';
import authRequests from '../../../helpers/data/authRequests';
import marineTrafficRequests from '../../../helpers/data/marineTrafficRequests';
import './Locations.scss';

class Locations extends React.Component {
  state = {
    tugs: [],
  }

  getAllTugs() {
    const uid = authRequests.getCurrentUid();
    tugRequests.getTugs(uid).then((tugs) => {
      
      tugs.forEach((singleTug) => {
        marineTrafficRequests.getTugExtended(singleTug.mmsi).then((result) => {
          this.setState({ tugs });
          const tugInfo = result;
          if (tugInfo.length === 0) {
            this.setState({ selectedTug: [singleTug] });
          } else {
            tugInfo.forEach((item) => {
              this.setState({
                selectedTug: [{
                  id: singleTug.id,
                  name: singleTug.name,
                  mmsi: singleTug.mmsi,
                  captain: singleTug.captain,
                  currentLat: parseFloat(item[1]),
                  currentLon: parseFloat(item[2]),
                  speed: parseFloat(item[3]),
                  lastPort: item[20],
                  nextPort: item[31],
                  inEdit: singleTug.inEdit,
                  uid: singleTug.uid,
                }],
              });
            });
          }
        });
      });
    })
      .catch(err => console.error('error in getAllTugs', err));
  }

  componentWillMount() {
    this.getAllTugs();
  }

  render() {
    const { tugs } = this.state;

    return (
      <div className="Locations">
        <h3>All tugs will be displayed on map</h3>
        <Map
          tugs={tugs}
        />
      </div>
    );
  }
}

export default Locations;
