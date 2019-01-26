import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import MapPopup from '../MapPopup/MapPopup';
import './Map.scss';

class Map extends React.Component {
  static propTypes = {
    tugs: PropTypes.array,
    selectedTug: PropTypes.object,
  }

  // allTugsComponent = () => {
  //   const { tugs } = this.props;
  //   tugs.map(tug => (
  //     <MapPopup
  //       key={tug.id}
  //       singleTug={tug}
  //     />
  //   ));
  // };

  // singleTugComponent = () => {
  //   const { selectedTug } = this.props;
  //   return <LeafletMap
  //     center={[35.08533, -90.15833]}
  //     zoom={6}
  //     maxZoom={10}
  //     attributionControl={true}
  //     zoomControl={true}
  //     doubleClickZoom={true}
  //     scrollWheelZoom={true}
  //     dragging={true}
  //     animate={true}
  //     easeLinearity={0.35}
  //   >
  //     <TileLayer
  //       url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  //     />
  //     <MapPopup key={selectedTug.id} singleTug={selectedTug} />;
  //   </LeafletMap>;
  // };

  // singleTugComponent = <MapPopup key={selectedTug.id} singleTug={selectedTug}/>;

  // componentDidMount() {
  //   this.singleTugComponent();
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props !== prevProps) {
  //     this.allTugsComponent();
  //   }
  // }

  // displayMap = () => {
  //   const { tugs, selectedTug } = this.props;
  //   if (!selectedTug) {
  //     tugs.map(tug => (
  //       <MapPopup
  //         key={tug.id}
  //         singleTug={tug}
  //       />
  //     ));
  //   } else {
  //     return <MapPopup key={selectedTug.id} singleTug={selectedTug} />;
  //   }
  // };

  // allTugsComponent = () => {
  //   const { tugs, selectedTug } = this.props;
  //   if (tugs.length === 0) {
  //     return <MapPopup key={selectedTug.id} singleTug={selectedTug} />;
  //   }
  //   return tugs.map(tug => (
  //     <MapPopup key={tug.id} singleTug={tug} />
  //   ));
  // };

  // allTugsComponent = () => {
  //   const { tugs, selectedTug } = this.props;
  //   if (tugs.length !== 0) {
  //     console.log(tugs);
  //     tugs.map(tug => (
  //       <MapPopup key={tug.id} singleTug={tug} />
  //     ));
  //   }
  //   debugger;
  //   console.log(selectedTug);
  //   return <MapPopup key={selectedTug.id} singleTug={selectedTug} />;
  // };

  // allTugsComponent = () => {
  //   const { tugs, selectedTug } = this.props;
  //   console.log(selectedTug);
  //   console.log(tugs);
  //   if (tugs) {
  //     tugs.map(tug => (
  //     <MapPopup key={tug.id} singleTug={tug} />
  //     ));
  //   }
  //   return <MapPopup key={selectedTug.id} singleTug={selectedTug} />;
  // };

  render() {
    const { tugs, selectedTug } = this.props;

    // const allTugsComponent = () => {
    //   console.log(tugs.length);
    //   if (tugs.length !== 0) {
    //     console.log(tugs);
    //     tugs.map(tug => (
    //       <MapPopup key={tug.id} singleTug={tug} />
    //     ));
    //   }
    //   console.log(selectedTug);
    //   return <MapPopup key={selectedTug.id} singleTug={selectedTug} />;
    // };

    // const allTugsComponent = () => {
    //   if (tugs.length === 0) {
    //     return <MapPopup key={selectedTug.id} singleTug={selectedTug} />;
    //   }
    //   return tugs.map(tug => (
    //     <MapPopup key={tug.id} singleTug={tug} />
    //   ));
    // };

    const allTugsComponent = () => tugs.map(tug => (
        <MapPopup
          key={tug.id}
          singleTug={tug}
        />
    ));

    // const singleTugComponent = <MapPopup key={selectedTug.id} singleTug={selectedTug} />;

    // const chooseDisplay = (tugs.length === 0) ? singleTugComponent : allTugsComponent();

    const singleTugComponent = () => <MapPopup
        key={selectedTug.id}
        singleTug={selectedTug}
      />;

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
          {/* {chooseDisplay} */}
          {allTugsComponent()}
          {/* <MapPopup key={selectedTug.id} singleTug={selectedTug} /> */}
        </LeafletMap>
      </div>
    );
  }
}

export default Map;
