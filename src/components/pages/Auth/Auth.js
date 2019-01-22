import React from 'react';
import './Auth.scss';
import authRequests from '../../../helpers/data/authRequests';

import googleButton from './images/googlebutton.png';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.history.push('/fleet');
    }).catch(err => console.error('error in auth', err));
  }


  render() {
    return (
      <div className='Auth'>
        <button className='btn btn-outline-light' onClick={this.authenticateUser}>
          <img src={googleButton} alt="google login button"/>
        </button>
      </div>
    );
  }
}

export default Auth;
