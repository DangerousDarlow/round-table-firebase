import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar'

function App() {
  return (
    <CssBaseline>
      <div className="App">
        <TopBar></TopBar>
      </div>
    </CssBaseline>
  );
}

export default App;
