import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
// import Control from 'react-leaflet-control';
import { Button, Row, Col } from 'reactstrap';
import TugPopup from '../TugPopup/TugPopup';

import './Map.scss';
import 'react-leaflet-markercluster/dist/styles.min.css';

class Map extends React.Component {
  state = {
    center: [35.08533, -90.15833],
  }

  static propTypes = {
    tugs: PropTypes.array,
    fleetView: PropTypes.func,
  }

  flyToLocation = () => {
    this.map.flyTo([35.08533, -90.15833], 6);
  };

  componentDidMount() {
    this.map = this.mapInstance.leafletElement;
  }

  render() {
    const { tugs, fleetView } = this.props;
    const { center } = this.state;

    const tugMarker = tugs.map(tug => (
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
        <LeafletMap
          ref={(e) => { this.mapInstance = e; }}
          center={center}
          zoom={6}
          maxZoom={20}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
          id="LeafletMap"
        >
          {/* <Control position='topright'>
            <Button outline
              size="sm"
              id='map-auto-btn'
              onClick={() => flyTo([35.08533, -90.15833], 6)}
            >
              <i className='fas fa-sync-alt'></i>
            </Button>
          </Control> */}
          <Button outline className='leaflet-bar' size="sm" onClick={fleetView} id='map-back-btn'><i className="fas fa-arrow-left"></i></Button>
          <Button outline className='leaflet-bar' size="sm" onClick={this.flyToLocation} id='map-refresh-btn'><i className="fas fa-sync-alt"></i></Button>
          <TileLayer
            url='https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png'
            attribution='<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
          />
          <MarkerClusterGroup
            showCoverageOnHover={false}
            spiderfyDistanceMultiplier={2}
            animate={true}
          >
            {tugMarker}
          </MarkerClusterGroup>
          {/* {controlButtons} */}

        </LeafletMap>
        {/* </Row> */}
        {/* </Col> */}
      </div>
    );
  }
}

export default Map;
