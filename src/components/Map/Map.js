import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import { Button } from 'reactstrap';
import TugPopup from '../TugPopup/TugPopup';
import './Map.scss';

class Map extends React.Component {
  static propTypes = {
    tugs: PropTypes.array,
    fleetView: PropTypes.func,
  }

  render() {
    const { tugs, fleetView } = this.props;

    const tugMarker = () => tugs.map(tug => (
      <Marker
        key={tug.id}
        position={[((tug.currentLat === undefined) ? tug.homeportLat : tug.currentLat), ((tug.currentLon === undefined) ? tug.homeportLon : tug.currentLon)]}
      >
        <Popup>
          <TugPopup key={tug.id} singleTug={tug} />
        </Popup>
      </Marker>
    ));

    return (
      <div className="Map">
        <div>
          <Button color="secondary" size="sm" onClick={fleetView}>Back</Button>
        </div>
        <LeafletMap
          center={[35.08533, -90.15833]}
          zoom={6}
          maxZoom={12}
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
          {tugMarker()}
        </LeafletMap>
      </div>
    );
  }
}

export default Map;
