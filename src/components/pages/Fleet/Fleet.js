import React from 'react';
import { Button, Table } from 'reactstrap';
import './Fleet.scss';
import TugItem from '../../TugItem/TugItem';
import authRequests from '../../../helpers/data/authRequests';
import tugRequests from '../../../helpers/data/tugRequests';
import TugModal from '../../TugModal/TugModal';
import TugForm from '../../TugForm/TugForm';

class Fleet extends React.Component {
  state = {
    tugs: [],
    modal: false,
  }

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

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
        <Table hover>
          <thead>
            <tr>
              <th>Tug Name</th>
              <th>Home Port</th>
              <th>Captain Name</th>
              <th className="table-btn">
                <Button
                  className="mr-auto"
                  color="link"
                  id="add-tug-btn"
                  onClick={this.toggleModal}
                ><i className="fas fa-plus fa-2x"></i></Button></th>
            </tr>
          </thead>
          <tbody>
            {tugItemComponents}
          </tbody>
        </Table>
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
