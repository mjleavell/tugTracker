import React from 'react';
import Map from '../../Map/Map';
import tugRequests from '../../../helpers/data/tugRequests';

import './SingleLocation.scss';

class SingleLocation extends React.Component {
  state = {
    selectedTug: [],
  }

  getSingleTug = () => {
    const tugId = this.props.match.params.id;
    tugRequests.getSingleTug(tugId).then((singleTug) => {
      this.setState({ selectedTug: [singleTug] });
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
