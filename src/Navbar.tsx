import React, { PropsWithChildren } from 'react';
import { Link } from "react-router-dom";
import Column from './Column';
import { MenuRounded } from '@material-ui/icons';
import './Navbar.css';

import logo from './assets/logos/logo_horiz.png';

type NavbarState = {
  linksVisible: boolean,
};

class Navbar extends React.Component<PropsWithChildren<{}>, NavbarState> {
  state = {
    linksVisible: false, 
  };

  toggle() {
    this.setState({
      linksVisible: !this.state.linksVisible,
    });
  }

  close() {
    this.setState({
      linksVisible: false,
    });
  }

  render() {
    let linksClass = ["Navbar-links"];
    if (this.state.linksVisible) {
      linksClass.push("Enabled");
    }
    return (
      <>
        <div className="Navbar-blockout" />
        <div className="Navbar-homelink">
          <Link to="/" onClick={this.close.bind(this)}>
            <img alt="AJS logo" className="Navbar-logo" src={logo} />
          </Link>
        </div>
        <div className="Navbar">
          <Column fill>
            <ul className={linksClass.join(' ')}>
              {React.Children.map(this.props.children!, child => (
                <li onClick={this.close.bind(this)}>{child}</li>
              ))}
            </ul>
          </Column>
          <div className="Navbar-burger" onClick={this.toggle.bind(this)}>
            <MenuRounded className="Icon"/>
          </div>
        </div>
        <div className="Navbar-spacer" />
      </>
    );
  }
}

export default Navbar;
