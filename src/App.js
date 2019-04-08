import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import EventInfo from './components/EventInfo/EventInfo';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1600px", background:"blue"}}>
        <Header/>
        <Featured/>
        <EventInfo/>
      </div>
    );
  }
}

export default App;
