import React from 'react';
import { Button } from 'reactstrap';
import './Fleet.scss';

class Fleet extends React.Component {
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

  render() {
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
      </div>
    );
  }
}

export default Fleet;
