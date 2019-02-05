import React from 'react';
import './TugPopup.scss';

class TugPopup extends React.Component {
  render() {
    const { singleTug } = this.props;

    if (singleTug.currentLat === undefined) {
      return (
        <div className="Map-Popup">
          <h4>{singleTug.name}</h4>
          <p>Captain: {singleTug.captain}</p>
          <p>Current Port: {singleTug.homeport}</p>
          <p>Speed: 0 knots</p>
        </div>
      );
    }
    return (
        <div className="Map-Popup">
          <h4>{singleTug.name}</h4>
          <p>Captain: {singleTug.captain}</p>
          <p>Previous Port: {singleTug.homeport}</p>
          <p>Destination: {singleTug.homeport}</p>
          <p>Speed: {(singleTug.speed) / 10} knots</p>
        </div>
    );
  }
}

export default TugPopup;
