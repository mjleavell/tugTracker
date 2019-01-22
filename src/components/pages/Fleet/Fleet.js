import React from 'react';
import { Button } from 'reactstrap';
import './Fleet.scss';
import TugItem from '../../TugItem/TugItem';
import authRequests from '../../../helpers/data/authRequests';
import tugRequests from '../../../helpers/data/tugRequests';

class Fleet extends React.Component {
  state = {
    tugs: [],
  }

  addTugView = (e) => {
    e.preventDefault();
    this.props.history.push('/fleet/add');
  };

  tugLocationsView = (e) => {
    e.preventDefault();
    this.props.history.push('/locations');
  };

  singleLocationView = (e) => {
    e.preventDefault();
    const getId = 'tug12';
    this.props.history.push(`/locations/${getId}`);
  };

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
    const tugItemComponents = tugs.map(tug => (
      <TugItem
        tugs={tug}
        key={tug.id}
      />
    ));

    return (
      <div className="Fleet">
        <Button
          color="light"
          size="small"
          className="add-tug-btn"
          onClick={this.addTugView}
        >Add tug</Button>
        <Button
          color="light"
          size="small"
          className="locations-btn"
          onClick={this.tugLocationsView}
        >View all tugs</Button>
        <Button
          color="light"
          size="small"
          className="single-tug-btn"
          id="tug12"
          onClick={this.singleLocationView}
        >Single Tug Map</Button>
        <div className="row">
          <div className="col">
            <ul>{tugItemComponents}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Fleet;
