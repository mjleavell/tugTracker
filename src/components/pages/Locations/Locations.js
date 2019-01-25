import React from 'react';
import {
  Map as LeafletMap,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import './Locations.scss';

class Locations extends React.Component {
  render() {
    return (
      <div className="Locations">
        <h3>All tugs will be displayed on map</h3>
        <LeafletMap
          center={[50, 10]}
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
          <Marker position={[50, 10]}>
            <Popup>
              Popup for any custom information.
            </Popup>
          </Marker>
        </LeafletMap>
      </div>
    );
  }
}

export default Locations;
