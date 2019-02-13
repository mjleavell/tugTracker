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
    console.log(e.target.closest('button').id);
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
          <Button id={tugs.id} onClick={this.inEditTrue} color="link"><i className="fas fa-edit"></i></Button>
          <Button color="link" onClick={this.deleteTug}><i className="fas fa-trash-alt"></i></Button>
          <Button id={tugs.id} onClick={singleLocationView} color="link"><i className="fas fa-map-marker-alt"></i></Button>
        </td>
      </tr>
    );
  }
}

export default TugItem;
