/* eslint-disable max-len */
import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Input,
  Form,
} from 'reactstrap';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MapIcon from '@material-ui/icons/Place';
import tugShape from '../../helpers/propz/tugShape';
import './TugItem.scss';

class TugItem extends React.Component {
  state = {
    editedTugId: '-1',
    newCaptain: '',
  }

  static propTypes = {
    tugs: tugShape.tugShape,
    singleLocationView: PropTypes.func,
    deleteSingleTug: PropTypes.func,
    updateInEdit: PropTypes.func,
    updateCaptain: PropTypes.func,
  }

  deleteTug = (e) => {
    e.preventDefault();
    const { deleteSingleTug, tugs } = this.props;
    deleteSingleTug(tugs.id);
  }

  inEditTrue = (e) => {
    e.preventDefault();
    const tugId = e.target.closest('button').id;
    const { updateInEdit } = this.props;
    updateInEdit(tugId, true);
  }

  // gets the value from input
  handleCaptainChange = (e) => {
    e.preventDefault();
    this.setState({ newCaptain: e.target.value });
  }

  // on submit, new captain is set and inEdit set to false
  updateCaptainText = (e) => {
    e.preventDefault();
    e.persist();
    const { newCaptain } = this.state;
    const { updateInEdit, updateCaptain, tugs } = this.props;
    updateCaptain(tugs.id, newCaptain);
    updateInEdit(tugs.id, false);
  }


  render() {
    const { tugs, singleLocationView } = this.props;
    const displayCaptain = tugs.inEdit ? <Form onSubmit={this.updateCaptainText} ><Input className="captain-input" value={this.state.newCaptain} onChange={this.handleCaptainChange} type="text" placeholder={tugs.captain} /></Form> : tugs.captain;

    return (
      <tr className="Tug-Item">
        <td>{tugs.name}</td>
        <td>{tugs.homeport}</td>
        <td>{displayCaptain}</td>
        <td>
          <Button id={tugs.id} onClick={this.inEditTrue} color="link">
            <EditIcon />
          </Button>
          <Button color="link" onClick={this.deleteTug}>
            <DeleteIcon />
          </Button>
          <Button id={tugs.id} onClick={singleLocationView} color="link">
            <MapIcon />
          </Button>
        </td>
      </tr>
    );
  }
}

export default TugItem;
