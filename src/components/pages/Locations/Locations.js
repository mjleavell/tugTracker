import React from 'react';
import Map from '../../Map/Map';
import tugRequests from '../../../helpers/data/tugRequests';
import authRequests from '../../../helpers/data/authRequests';
import './Locations.scss';

class Locations extends React.Component {
  state = {
    tugs: [],
  }

  getAllTugs() {
    const uid = authRequests.getCurrentUid();
    tugRequests.getTugs(uid)
      .then((tugs) => {
        this.setState({ tugs });
      })
      .catch(err => console.error('error in getAllTugs', err));
  }

  componentDidMount() {
    this.getAllTugs();
  }

  render() {
    const { tugs } = this.state;

    return (
      <div className="Locations">
        <Map
          tugs={tugs}
        />
      </div>
    );
  }
}

export default Locations;
