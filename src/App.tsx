import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Info, People, Send, PersonAdd } from '@material-ui/icons';

import './App.css';

import Navbar from './Navbar';

import HomePage from './HomePage';
import AboutPage from './AboutPage';

import Committee from './Committee';
import committee from './assets/committee/manifest.json';

import committeeBanner from './assets/banners/committee_banner.jpg';

import Gallery, {GalleryView} from './Gallery';

import Column from './Column';

import Footer from './Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Link to="/">
            <Home className="Icon"/>
            Home
          </Link>
          <Link to="/about">
            <Info className="Icon"/>
            About Us
          </Link>
          <Link to="/committee">
            <People className="Icon"/>
            Committee
          </Link>
          <Link to="/join">
            <PersonAdd className="Icon"/>
            Become a Member
          </Link>
          <Link to="/contact">
            <Send className="Icon"/>
            Contact Us
          </Link>
        </Navbar>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/committee" component={CommitteePage} />
        <Footer>
          <Link to="/">
            <Home className="Icon"/>
            Home
          </Link>
          <Link to="/about">
            <Info className="Icon"/>
            About Us
          </Link>
          <Link to="/committee">
            <People className="Icon"/>
            Committee
          </Link>
          <Link to="/join">
            <PersonAdd className="Icon"/>
            Become a Member
          </Link>
          <Link to="/contact">
            <Send className="Icon"/>
            Contact Us
          </Link>
        </Footer>
      </div>
    </Router>
  );
}

const CommitteePage: React.FC = () => {
  return (
    <>
      <Gallery>
        <GalleryView image={committeeBanner}>
          <h1>Meet our Committee</h1>
        </GalleryView>
      </Gallery>
      <Column>
        <h1>Executive Committee</h1>
        <p>
          AJS is run by the Executive Committee which is elected at a yearly meeting (AGM) in the Lent Term, and a General Committee which is chosen by the Executive Committee. If you want to get involved with AJS, get in touch at <a href="mailto:anglojapanesesoc@gmail.com">anglojapanesesoc@gmail.com</a>. The committee is run according to the constitution. Our general committee is elected by the executive committee during the year, should the need arise. 
        </p>
        <Committee {...committee}/>
        <br />
      </Column>
    </>
  );
};

export default App;
