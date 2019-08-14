import React from 'react';
import './App.css';

import Committee from './Committee';
import committee from './assets/committee/manifest.json';

const App: React.FC = () => {
  return (
    <div className="App">
      <Committee {...committee} />
    </div>
  );
}

export default App;
