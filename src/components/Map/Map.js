import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import { Button, Row, Col } from 'reactstrap';
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
        <Col>
          <Row>
            <Button onClick={fleetView}>Back</Button>
          </Row>
          <Row>
            <LeafletMap
              center={[35.08533, -90.15833]}
              zoom={6}
              maxZoom={20}
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
          </Row>
        </Col>
      </div>
    );
  }
}

export default Map;
