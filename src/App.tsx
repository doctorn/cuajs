import React from 'react';

import CommitteeMember, {MemberDescriptor} from './Committee';
import tokinoPhoto from './assets/committee/takahashi_tokino.jpg';
import mahoPhoto from './assets/committee/taketani_maho.jpg';

import './App.css';

const tokino: MemberDescriptor = {
  role: "Publicity Officer",
  name: "Tokino Takahashi",
  email: "tt429@cam.ac.uk",
  subject: "Medicine",
  college: "Emmanuel",
  photo: tokinoPhoto,
};

const maho: MemberDescriptor = {
  role: "President",
  name: "Maho Taketani",
  email: "mt738@cam.ac.uk",
  subject: "HSPS",
  college: "Magdalene",
  photo: mahoPhoto,
};

const App: React.FC = () => {
  return (
    <div className="App">
      <CommitteeMember {...maho}/>
      <CommitteeMember {...tokino}/>
    </div>
  );
}

export default App;
