import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import BackIcon from '@material-ui/icons/ArrowBack';
import RefreshIcon from '@material-ui/icons/Refresh';
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
          <MenuList id='map-menu-list' className='leaflet-control-zoom leaflet-bar leaflet-control'>
            <MenuItem id='map-menu-back' onClick={fleetView}>
              <BackIcon />
            </MenuItem>
            <MenuItem id='map-menu-refresh' onClick={this.flyToLocation}>
              <RefreshIcon />
            </MenuItem>
          </MenuList>
        </LeafletMap>
      </div>
    );
  }
}

export default Map;
