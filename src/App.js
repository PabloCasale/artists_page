import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import EventInfo from './components/EventInfo/EventInfo';
import Highlight from './components/Highlights';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1600px", background:"whitesmoke"}}>
        <Header/>
        <Featured/>
        <EventInfo/>
        <Highlight/>
      </div>
    );
  }
}

export default App;
