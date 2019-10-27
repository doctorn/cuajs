import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Info, People, Send, PersonAdd, Email } from '@material-ui/icons';

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

const FacebookProvider = require('react-facebook').FacebookProvider;
const Page = require('react-facebook').Page;

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Link to="/">
            <Home className="Icon" />
            Home
          </Link>
          <Link to="/about">
            <Info className="Icon" />
            About Us
          </Link>
          <Link to="/committee">
            <People className="Icon" />
            Committee
          </Link>
          <Link to="/join">
            <PersonAdd className="Icon" />
            Become a Member
          </Link>
          <Link to="/contact">
            <Send className="Icon" />
            Contact Us
          </Link>
        </Navbar>
        <div className="Content">
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/committee" component={CommitteePage} />
          <Route path="/join" component={JoinPage} />
          <Route path="/contact" component={ContactPage} />
        </div>
        <Footer>
          <Link to="/">
            <Home className="Icon" />
            Home
          </Link>
          <Link to="/about">
            <Info className="Icon" />
            About Us
          </Link>
          <Link to="/committee">
            <People className="Icon" />
            Committee
          </Link>
          <Link to="/join">
            <PersonAdd className="Icon" />
            Become a Member
          </Link>
          <Link to="/contact">
            <Send className="Icon" />
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
          AJS is run by the Executive Committee which is elected at a yearly meeting (AGM) in the Lent Term, and a General Committee which is chosen by the Executive Committee. If you want to get involved with AJS, get in touch at <a href="mailto:anglojapanesesociety@gmail.com">anglojapanesesoc@gmail.com</a>. The committee is run according to the constitution. Our general committee is elected by the executive committee during the year, should the need arise. 
        </p>
        <Committee {...committee}/>
        <br />
      </Column>
    </>
  );
};

const JoinPage: React.FC = () => {
  return (
    <>
      <Gallery>
        <GalleryView image={committeeBanner}>
          <h1>Join Us</h1>
        </GalleryView>
      </Gallery>
      <Column>
        <h1>Membership</h1>
        <p>We welcome all members of the university - students and staff who are interested in finding more about Japanese culture of who are looking for a Japan-related community. You can be of any nationality and you most definitely don't need to know any Japanese to join either!</p>
        <p>Membership is £5 per year, or £10 for life. Membership allows you access to certain member-only events as well as providing discounted access for our open events.</p>
        <p>To apply for membership, please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFJUEx2j64HgzZRI_CjLjUGCmcgMsVeicvmXu0HLAyAZdOsg/viewform?fbclid=IwAR1WDTXxkeVb244A3RjnY2twAyl_P3yFPmoFkqFXi9SHLN_ZaH5oieFB_1I">this form</a> and we'll get in contact with you about payment soon!</p>
        <br />
      </Column>
    </>
  );
};

const ContactPage: React.FC = () => {
  return (
    <>
      <Gallery>
        <GalleryView image={committeeBanner}>
          <h1>Contact Us</h1>
        </GalleryView>
      </Gallery>
      <Column>
        <h1>How to get in Touch</h1>
        <p>There are plenty of ways to get in touch with us. If you have a question or query, don't hesitate to <a href="mailto:anglojapanesesociety@gmail.com">email us</a>. If you're looking for how to become a member, take a look at <Link to="/join/">this page</Link> and fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFJUEx2j64HgzZRI_CjLjUGCmcgMsVeicvmXu0HLAyAZdOsg/viewform?fbclid=IwAR1WDTXxkeVb244A3RjnY2twAyl_P3yFPmoFkqFXi9SHLN_ZaH5oieFB_1I">this form</a>. Otherwise, if you just wanted to subscribe to the mailing list, head <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIcZ1QTiVltWcqCZ7pgSbmJBuq8l1d21PYouLdIiYCc8IIRQ/viewform">over here</a>.</p>
        <p>You can also contact us via Facebook!</p>
        <div className="ContactPage-facebook">
          <FacebookProvider appId="736115416864338">
            <Page href="https://www.facebook.com/CUAJS" tabs="timeline" width={500}/>
          </FacebookProvider>
        </div>
        <br />
        <br />
      </Column>
    </>
  );
};

export default App;
