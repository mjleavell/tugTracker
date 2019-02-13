import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import './MyNavbar.scss';
import tugImg from './tug2.png';


class MyNavbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool,
    logoutClickEvent: PropTypes.func,
  }

  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    const buildNavbar = () => {
      if (isAuthed) {
        return (
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                to="/locations"
                color="light"
                size="small"
                className="locations-btn"
                onClick={this.tugLocationsView}
              >Map</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                to="/auth"
                onClick={logoutClickEvent}
              >Logout</NavLink>
            </NavItem>
          </Nav >
        );
      }
      return <Nav className='ml-auto' navbar />;
    };

    return (
      <div className="My-Navbar">
        <Navbar color="dark" dark expand="md" id="my-navbar">
          <NavbarBrand href="/fleet"><img src={tugImg} alt="tug-icon"></img> Tug Tracker</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
