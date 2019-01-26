import React from 'react';
import Map from '../../Map/Map';
import tugRequests from '../../../helpers/data/tugRequests';

import './SingleLocation.scss';

class SingleLocation extends React.Component {
  state = {
    selectedTug: {},
    tugs: [],
  }

  getSingleTug = () => {
    const tugId = this.props.match.params.id;
    tugRequests.getSingleTug(tugId).then((singleTug) => {
      console.log(singleTug);
      this.setState({ selectedTug: singleTug });
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
        <h3>One tug will be displayed on the map</h3>
        <Map
          selectedTug={selectedTug}
          // tugs={tugs}
        />
      </div>
    );
  }
}

export default SingleLocation;
