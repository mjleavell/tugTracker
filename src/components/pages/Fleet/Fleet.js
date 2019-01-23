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
    const getId = e.target.closest('.btn').id;
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

  deleteSingleTug = (tugId) => {
    tugRequests.deleteTug(tugId)
      .then(() => {
        this.getAllTugs();
      })
      .catch(err => console.error('error with delete single tug', err));
  }

  updateInEdit = (tugId, inEdit) => {
    tugRequests.patchInEdit(tugId, inEdit)
      .then(() => {
        this.getAllTugs();
      })
      .catch(err => console.error('error in update in edit', err));
  }

  updateCaptain = (tugId, captain) => {
    tugRequests.patchCaptain(tugId, captain)
      .then(() => {
        // this.getAllTugs();
      })
      .catch(err => console.error('error in update in edit', err));
  }

  render() {
    const { tugs } = this.state;
    const tugItemComponents = tugs.map(tug => (
      <TugItem
        tugs={tug}
        key={tug.id}
        singleLocationView={this.singleLocationView}
        deleteSingleTug={this.deleteSingleTug}
        updateInEdit={this.updateInEdit}
        updateCaptain={this.updateCaptain}
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
          <div>
            {tugItemComponents}
          </div>
      </div>
    );
  }
}

export default Fleet;
