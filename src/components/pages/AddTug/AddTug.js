import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from 'reactstrap';

import './AddTug.scss';

class AddTug extends React.Component {
  render() {
    return (
      <div className="AddTug">
        <h3>Add Tug to Fleet</h3>
        <Form>
          <FormGroup row>
            <Label for="tug-name">Tug Name</Label>
            <Col sm={10}>
              <Input type="text" id="tug-name" placeholder="Enter name of tug" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="tug-mmsi">Tug MMSI</Label>
            <Col sm={10}>
              <Input type="text" id="tug-mmsi" placeholder="Enter mmsi" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="tug-homeport">Home Port</Label>
            <Col sm={10}>
              <Input type="text" id="tug-homeport" placeholder="Enter home port" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="tug-homeport-lat">Latitude</Label>
            <Col sm={10}>
              <Input type="text" id="tug-homeport-lat" placeholder="Enter home port latitude" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="tug-homeport-lon">Longitude</Label>
            <Col sm={10}>
              <Input type="text" id="tug-homeport-lon" placeholder="Enter home port longitude" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="tug-Captain">Captain</Label>
            <Col sm={10}>
              <Input type="text" id="tug-captain" placeholder="Enter captain" />
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddTug;
