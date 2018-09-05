import React, { Component } from 'react';
import './App.css';
import Base from "./containers/Base/Base";
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Base/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
