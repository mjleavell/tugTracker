import React from 'react';
import { Button } from 'reactstrap';
import singleVesselRequest from '../helpers/data/singleVesselRequest';
import './App.scss';

class App extends React.Component {
  render() {
    // only gives you back info for moving tugs
    // janet leavell mmsi: 367665380
    // maggie leavell mmsi: 367547050
    singleVesselRequest.getVessel('367665380')
      .then((data) => {
        console.log(data);
      });

    return (
      <div className="App">
        <button className='btn btn-danger'>HELP ME</button>
        <Button
          tag="a"
          color="success"
          size="large"
          href="http://reactstrap.github.io"
          target="_blank"
        >View Reactstrap Docs</Button>
      </div>
    );
  }
}

export default App;
