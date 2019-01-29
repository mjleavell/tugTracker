import React from 'react';
import Map from '../../Map/Map';
import tugRequests from '../../../helpers/data/tugRequests';

import './SingleLocation.scss';
import marineTrafficRequests from '../../../helpers/data/marineTrafficRequests';

class SingleLocation extends React.Component {
  state = {
    selectedTug: [],
  }

  getSingleTug = () => {
    const tugId = this.props.match.params.id;
    tugRequests.getSingleTug(tugId).then((singleTug) => {
      marineTrafficRequests.getTugExtended(singleTug.mmsi).then((result) => {
        const tugInfo = result.data;
        if (tugInfo.length === 0) {
          console.log('tugInfo', tugInfo);
          this.setState({ selectedTug: [singleTug] });
        } else {
          console.log(tugInfo);
          this.setState({ selectedTug: [tugInfo] });
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
