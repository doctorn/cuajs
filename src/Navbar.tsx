import React from 'react';
import { Link } from "react-router-dom";
import Column from './Column';
import { MenuRounded } from '@material-ui/icons';
import './Navbar.css';

import logo from './assets/logos/logo_horiz.png';

const Navbar: React.FC =
  (props) => {
    return (
      <>
        <div className="Navbar-blockout" />
        <div className="Navbar-homelink">
          <Link to="/">
            <img alt="AJS logo" className="Navbar-logo" src={logo} />
          </Link>
        </div>
        <div className="Navbar">
          <Column fill>
            <ul className="Navbar-links">
              {React.Children.map(props.children!, child => (
                <li>{child}</li>
              ))}
            </ul>
          </Column>
          <a className="Navbar-burger">
            <MenuRounded className="Icon"/>
          </a>
        </div>
        <div className="Navbar-spacer" />
      </>
    );
  };

export default Navbar;
