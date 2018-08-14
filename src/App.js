import React, { Component, Fragment } from 'react';
import VideoPlayer from './VideoPlayer';
import logo from './logo.svg';
import VideoDetails from './VideoDetails';
import TheNavbar from './TheNavbar';
import TheCarousel from './TheCarousel';
import './App.css';
import TrendingVideos from './TrendingVideos';
import Sidebar from './Sidebar'
import TheFooter from './TheFooter';

class App extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <VideoPlayer />
        <TheFooter />
      </Fragment>
    );
  }
}

export default App;
