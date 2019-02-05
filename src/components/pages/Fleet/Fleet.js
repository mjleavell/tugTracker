import React from 'react';
import { Button } from 'reactstrap';
import './Fleet.scss';
import TugItem from '../../TugItem/TugItem';
import authRequests from '../../../helpers/data/authRequests';
import tugRequests from '../../../helpers/data/tugRequests';
import TugModal from '../../TugModal/TugModal';
import TugForm from '../TugForm/TugForm';

class Fleet extends React.Component {
  state = {
    tugs: [],
    modal: false,
  }

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

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

  componentWillMount() {
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
      })
      .catch(err => console.error('error in update in edit', err));
  }

  formSubmitEvent = (newTug) => {
    tugRequests.addTug(newTug)
      .then(() => {
        this.getAllTugs();
        this.setState({ modal: false });
      })
      .catch(err => console.error('error with adding new tug', err));
  }

  render() {
    const { tugs, modal } = this.state;
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

    const createTugForm = () => (
      <TugForm
        formSubmitEvent={this.formSubmitEvent}
      />
    );

    return (
      <div className="Fleet">
        <div className="fleet-btns">
          <Button
            color="light"
            size="small"
            className="add-tug-btn"
            onClick={this.toggleModal}
          >Add tug</Button>
          <Button
            color="light"
            size="small"
            className="locations-btn"
            onClick={this.tugLocationsView}
          >View all tugs</Button>
        </div>
        {tugItemComponents}
        <TugModal
          formSubmitEvent={this.formSubmitEvent}
          modal={modal}
          toggleModal={this.toggleModal}
          createTugForm={createTugForm()}
        />
      </div>
    );
  }
}

export default Fleet;
