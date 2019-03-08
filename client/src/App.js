import React, { Component } from 'react';
import './App.css';
import PageContainer from './containers/PageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Window layer 1</h1>
        <PageContainer/>
      </div>
    );
  }
}

export default App;
