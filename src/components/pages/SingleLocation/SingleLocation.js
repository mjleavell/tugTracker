import React from 'react';
import Map from '../../Map/Map';
import tugRequests from '../../../helpers/data/tugRequests';

import './SingleLocation.scss';
import marineTrafficRequests from '../../../helpers/data/marineTrafficRequests';

class SingleLocation extends React.Component {
  state = {
    tugs: [],
  }

  getSingleTug = () => {
    const tugId = this.props.match.params.id;
    tugRequests.getSingleTug(tugId).then((singleTug) => {
      marineTrafficRequests.getTugExtended(singleTug.mmsi).then((result) => {
        const tugInfo = result;
        if (tugInfo.length === 0) {
          this.setState({ tugs: [singleTug] });
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
    })
      .catch(err => console.error('error getSingleTug', err));
  }

  componentWillMount() {
    this.getSingleTug();
  }

  render() {
    const { selectedTug } = this.state;

    return (
      <div className="SingleLocation">
        <Map
          selectedTug={selectedTug}
        />
      </div>
    );
  }
}

export default SingleLocation;
