import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import tugShape from '../../helpers/propz/tugShape';
import './TugItem.scss';

class TugItem extends React.Component {
  static propTypes = {
    tugs: tugShape.tugShape,
    singleLocationView: PropTypes.func,
  }

  render() {
    const { tugs, singleLocationView } = this.props;
    return (
      <div className="tug-item">
        <Card color="light">
          <Row>
            <Col xs="3">{tugs.name}</Col>
            <Col xs="3">{tugs.homeport}</Col>
            <Col xs="3">{tugs.captain}</Col>
            <Col xs="3" className="btn-img">
              <Button size="sm" color="dark"><i className="fas fa-edit"></i></Button>
              <Button size="sm" color="dark"><i className="fas fa-trash-alt"></i></Button>
              <Button id={tugs.id} onClick={singleLocationView} color="dark" size="sm"><i className="fas fa-map-marked-alt"></i></Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default TugItem;
