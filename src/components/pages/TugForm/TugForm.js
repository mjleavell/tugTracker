import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from 'reactstrap';
import tugRequests from '../../../helpers/data/tugRequests';
import authRequests from '../../../helpers/data/authRequests';

import './TugForm.scss';

const defaultTug = {
  name: '',
  mmsi: '',
  homeport: '',
  homeportLat: '',
  homeportLon: '',
  captain: '',
  uid: '',
};

class TugForm extends React.Component {
  state = {
    newTug: defaultTug,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempTug = { ...this.state.newTug };
    tempTug[name] = e.target.value;
    this.setState({ newTug: tempTug });
  }

  formFieldNumberState = (name, e) => {
    const tempTug = { ...this.state.newTug };
    tempTug[name] = e.target.value * 1;
    this.setState({ newTug: tempTug });
  }

  nameChange = e => this.formFieldStringState('name', e);

  mmsiChange = e => this.formFieldNumberState('mmsi', e);

  homeportChange = e => this.formFieldStringState('homeport', e);

  homeportChangeLat = e => this.formFieldNumberState('homeportLat', e);

  homeportChangeLon = e => this.formFieldNumberState('homeportLon', e);

  captainChange = e => this.formFieldStringState('captain', e);

  addNewTug = (newTug) => {
    tugRequests.addTug(newTug)
      .then(() => {
        this.props.history.push('/fleet');
      })
      .catch(err => console.error('error with adding new tug', err));
  }

  formSubmit = (e) => {
    e.preventDefault();
    const newTug = { ...this.state.newTug };
    newTug.uid = authRequests.getCurrentUid();
    this.addNewTug(newTug);
    this.setState({ newTug: defaultTug });
  }

  render() {
    const { newTug } = this.state;
    return (
      <div className="AddTug">
        <h3>Add Tug to Fleet</h3>
        <div className="AddTug-form">
          <Form onSubmit={this.formSubmit}>
            <FormGroup row>
              <Label for="tug-name">Tug Name</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  id="tug-name"
                  placeholder="Enter name of tug"
                  value={newTug.name}
                  onChange={this.nameChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="tug-mmsi">Tug MMSI</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  id="tug-mmsi"
                  placeholder="Enter mmsi"
                  value={newTug.mmsi}
                  onChange={this.mmsiChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="tug-homeport">Home Port</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  id="tug-homeport"
                  placeholder="Enter home port"
                  value={newTug.homeport}
                  onChange={this.homeportChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="tug-homeport-lat">Latitude</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  id="tug-homeport-lat"
                  placeholder="Enter home port latitude"
                  value={newTug.homeportLat}
                  onChange={this.homeportChangeLat}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="tug-homeport-lon">Longitude</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  id="tug-homeport-lon"
                  placeholder="Enter home port longitude"
                  value={newTug.homeportLon}
                  onChange={this.homeportChangeLon}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="tug-Captain">Captain</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  id="tug-captain"
                  placeholder="Enter captain"
                  value={newTug.captain}
                  onChange={this.captainChange}
                />
              </Col>
            </FormGroup>
            <Button>Add Tug</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default TugForm;
