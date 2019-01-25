import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import MapPopup from '../../MapPopup/MapPopup';
import tugRequests from '../../../helpers/data/tugRequests';
import authRequests from '../../../helpers/data/authRequests';
import './Locations.scss';

class Locations extends React.Component {
  state = {
    tugs: [],
  }

  getAllTugs() {
    const uid = authRequests.getCurrentUid();
    tugRequests.getTugs(uid)
      .then((tugs) => {
        this.setState({ tugs });
      })
      .catch(err => console.error('error in getAllTugs', err));
  }

  componentDidMount() {
    this.getAllTugs();
  }

  render() {
    const { tugs } = this.state;

    const mapComponent = tugs.map(tug => (
      <MapPopup
        key={tug.id}
        singleTug={tug}
      />
    ));

    return (
      <div className="Locations">
        <h3>All tugs will be displayed on map</h3>
        <LeafletMap
          center={[35.08533, -90.15833]}
          zoom={6}
          maxZoom={10}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <div>
            {mapComponent}
          </div>
        </LeafletMap>
      </div>
    );
  }
}

export default Locations;
