import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';

//Intro page with nested form for login, info.
class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Main Page</h1>
        </header>

        <Login />

        <p className="App-intro">
          This is where the info will go.
        </p>
      </div>
    );
  }
}

export default Main;
