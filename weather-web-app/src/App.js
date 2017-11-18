import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="weatherHeader">
        <div className="searchBox">
            <MuiThemeProvider>
              <LocationBox>
              </LocationBox>
            </MuiThemeProvider>
            <MuiThemeProvider>
              <EnterButton>
              </EnterButton>
            </MuiThemeProvider>
          </div>
        </header>
      </div>
    );
  }
}

const LocationBox = () => (
  <div>
    <TextField
      hintText="Location"
    /><br />
    <br />    
  </div>
);

const EnterButton = () => (
  <div>
    <FlatButton className="button" label="Enter" />
  </div>
);


export default App;
