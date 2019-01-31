/* eslint-disable max-len */
import React from 'react';
import Map from '../../Map/Map';
import authRequests from '../../../helpers/data/authRequests';
import smashRequest from '../../../helpers/data/smashRequest';
import './Locations.scss';

class Locations extends React.Component {
  state = {
    tugs: [],
  }

  tugsSmash = () => {
    const uid = authRequests.getCurrentUid();
    smashRequest.getTugInfo(uid).then((tugs) => {
      console.log(tugs);
      this.setState({ tugs });
    })
      .catch(err => console.error('error in tugsSmash', err));
  }


  componentWillMount() {
    this.tugsSmash();
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
