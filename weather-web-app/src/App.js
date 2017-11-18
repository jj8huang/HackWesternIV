import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
       <div className="App">
          <CurrentWeatherHeader>
          </CurrentWeatherHeader>
          <MuiThemeProvider>
          <TextFieldExampleSimple >
          </TextFieldExampleSimple>
          <Weather>
          </Weather>
          <Weather>
          </Weather>
          <Weather>
          </Weather>
          <Weather>
          </Weather>
          <Weather>
          </Weather>
          </MuiThemeProvider> 
       </div>
    );
  }
}

class CurrentWeatherHeader extends Component {
  render(){
    return(
      <div className='header'>
        <img className= 'header-image' src={ require('./images/bkg_day_clear.png') } />
      </div>
    );
  }
}

class Weather extends Component {
  render() {
    return(
    <Paper style={WeatherStyle} zDepth={1}>
      <div className='weather'>
        <h3>CURRENT WEATHER</h3>
        <Divider/>
        <img src={ require('./images/sun.png') } />
        <Divider/>
        <p>Temperature: </p>
        <p>Precipitation: </p>
        <p>Windspeed: </p>
      </div>
      </Paper>
    );
  }
}

const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Location"
    /><br />
    <br />    
  </div>
);

const WeatherStyle = {
  height: 400,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default App;
