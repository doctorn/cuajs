import React from 'react';
import Column from './Column';
import './Footer.css';
import { Facebook, Instagram, Email } from '@material-ui/icons';

import logo from './assets/logos/logo_horiz.png';

const Footer: React.FC = (props) => {
  return (
    <div className="Footer">
      <Column>
        <div className="Footer-content">
          <div className="Footer-logo">
            <img alt="AJS logo" src={logo} />
          </div>
          <div className="Footer-segment">
            <h3>Site</h3>
            <ul className="Footer-sitelinks">
              {React.Children.map(props.children!, child => (
                <li>{child}</li>
              ))}
            </ul>
          </div>
          <div className="Footer-sociallinks">
            <a href="https://www.facebook.com/CUAJS/"><Facebook className="Icon" /></a>
            <a href="https://www.instagram.com/anglojapanesesociety/"><Instagram className="Icon" /></a>
            <a href="mailto:anglojapanesesociety@gmail.com"><Email className="Icon" /></a>
          </div>
        </div>
      </Column>
      <div className="Footer-copyright">
        <p>日本語のバージョンも来ます</p><br />
        <p>Copyright &copy; 2019 Cambridge University Anglo-Japanese Society</p>
        <p>License GPL v2.0</p>
      </div>
    </div>
  );
};

export default Footer;
