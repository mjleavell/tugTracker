import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import MapPopup from '../MapPopup/MapPopup';
import './Map.scss';

class Map extends React.Component {
  static propTypes = {
    tugs: PropTypes.array,
    selectedTug: PropTypes.array,
  }

  render() {
    const { tugs, selectedTug } = this.props;

    const allTugsComponent = () => tugs.map(tug => (
      <MapPopup
        key={tug.id}
        singleTug={tug}
      />
    ));

    const singleTugComponent = () => tugs.map(tug => (
      <MapPopup
        key={tug.id}
        singleTug={tug}
      />
    ));

    const chooseDisplay = (tugs.length < 2) ? singleTugComponent() : allTugsComponent();

    return (
      <div className="Map">
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
          {chooseDisplay}
          {/* {allTugsComponent()} */}
        </LeafletMap>
      </div>
    );
  }
}

export default Map;
