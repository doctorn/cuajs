import React from 'react';
import Column from './Column';
import './Footer.css';

import logo from './assets/logos/logo_horiz.png';

const Footer: React.FC = (props) => {
  return (
    <div className="Footer">
      <Column>
        <div className="Footer-content">
          <div className="Footer-logo">
            <img alt="AJS logo" src={logo} />
          </div>
          <div>
            <h3>Site</h3>
            <ul className="Footer-sitelinks">
              {React.Children.map(props.children!, child => (
                <li>{child}</li>
              ))}
            </ul>
          </div>
        </div>
      </Column>
      <div className="Footer-copyright">
        <p>Copyright &copy; 2019 Cambridge University Anglo-Japanese Society</p>
        <p>License GPL v2.0</p>
      </div>
    </div>
  );
};

export default Footer;
