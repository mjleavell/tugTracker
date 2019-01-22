import React from 'react';
import tugShape from '../../helpers/propz/tugShape';
import './TugItem.scss';

class TugItem extends React.Component {
  static propTypes = {
    tugs: tugShape.tugShape,
  }

  render() {
    const { tugs } = this.props;
    return (
      <li className="tug-item">
        <span className="col-8">{tugs.name}</span>
        <span className="col-8">{tugs.homeport}</span>
        <span className="col-8">{tugs.captain}</span>
        <span className="col-4">
          <button className="btn border-dark btn-danger"><i className="fas fa-trash-alt"></i></button>
          <button className="btn border-dark btn-danger"><i className="fas fa-trash-alt"></i></button>
          <button className="btn border-dark btn-danger"><i className="fas fa-trash-alt"></i></button>
        </span>
      </li>
    );
  }
}

export default TugItem;
