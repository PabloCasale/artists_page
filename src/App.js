import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import EventInfo from './components/EventInfo/EventInfo';
import Highlight from './components/Highlights';
import Pricing from './components/Pricing';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1600px", background:"whitesmoke"}}>
        <Header/>
        <Featured/>
        <EventInfo/>
        <Highlight/>
        <Pricing/>
      </div>
    );
  }
}

export default App;
