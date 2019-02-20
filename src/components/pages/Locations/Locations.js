import React from 'react';
import Map from '../../Map/Map';
import smashRequest from '../../../helpers/data/smashRequest';
import './Locations.scss';

class Locations extends React.Component {
  state = {
    tugs: [],
  }

  tugsSmash = () => {
    smashRequest.getTugInfo().then((tugs) => {
      this.setState({ tugs });
    })
      .catch(err => console.error('error in tugsSmash', err));
  }

  fleetView = (e) => {
    e.preventDefault();
    this.props.history.push('/fleet');
  };

  componentWillMount() {
    this.tugsSmash();
  }

  render() {
    const { tugs } = this.state;

    return (
      <div className="Locations">
        <Map
          tugs={tugs}
          fleetView={this.fleetView}
        />
      </div>
    );
  }
}

export default Locations;
