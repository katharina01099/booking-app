import React, { Component } from 'react';
import './App.css';
import PageContainer from './containers/PageContainer';

class App extends Component {
  render() {
    return (
      <div className = "window">
      <img id="applogo"src="logo.png" align="right"/>
        <h1 id ='appheader'>RUSH HOUR</h1>
        <PageContainer/>
      </div>
    );
  }
}

export default App;
