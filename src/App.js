import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import TheNavbar from './TheNavbar';
import Sidebar from './Sidebar';
import './App.css';

class App extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <Sidebar />
      </Fragment>
    );
  }
}

export default App;
