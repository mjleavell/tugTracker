import React from 'react';
import './TugPopup.scss';

class TugPopup extends React.Component {
  render() {
    const { singleTug } = this.props;

    if (singleTug.currentLat === undefined) {
      return (
        <div className="Tug-Popup">
          <h4>{singleTug.name}</h4>
          <p><strong>Captain: </strong>{singleTug.captain}</p>
          <p><strong>Current Port: </strong>{singleTug.homeport}</p>
          <p><strong>Speed: </strong>0 knots</p>
        </div>
      );
    }
    if (singleTug.nextPort === '') {
      return (
        <div className="Tug-Popup">
          <h4>{singleTug.name}</h4>
          <p><strong>Captain: </strong>{singleTug.captain}</p>
          <p><strong>Current Port: </strong>{singleTug.lastPort}</p>
          <p><strong>Speed: </strong>{(singleTug.speed) / 10} knots</p>
        </div>
      );
    }
    if (singleTug.nextPort === singleTug.lastPort) {
      return (
        <div className="Tug-Popup">
          <h4>{singleTug.name}</h4>
          <p><strong>Captain: </strong>{singleTug.captain}</p>
          <p><strong>Current Port: </strong>{singleTug.lastPort}</p>
          <p><strong>Speed: </strong>{(singleTug.speed) / 10} knots</p>
        </div>
      );
    }
    return (
        <div className="Map-Popup">
          <h4>{singleTug.name}</h4>
          <p><strong>Captain: </strong>{singleTug.captain}</p>
          <p><strong>Previous Port: </strong>{singleTug.lastPort}</p>
          <p><strong>Destination: </strong>{singleTug.nextPort}</p>
          <p><strong>Speed: </strong>{(singleTug.speed) / 10} knots</p>
        </div>
    );
  }
}

export default TugPopup;
