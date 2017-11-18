import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
       <div className="App">
          <div className="Header">
            <CurrentWeatherHeader>
            </CurrentWeatherHeader>
          </div>
          <div className="Location">
            <MuiThemeProvider>
            <LocationBox >
            </LocationBox>
            </MuiThemeProvider>
            <MuiThemeProvider>
              <EnterButton>
              </EnterButton>
            </MuiThemeProvider>
          </div>
          <div className = "WeatherComponents">
            <MuiThemeProvider>
            <Weather className="one" currWeather = "sunny">
            </Weather>
            </MuiThemeProvider> 
            <MuiThemeProvider>
            <Weather className="two">
            </Weather>
            </MuiThemeProvider> 
            <MuiThemeProvider>
            <Weather className="three">
            </Weather>
            </MuiThemeProvider> 
            <MuiThemeProvider>
            <Weather className="four">
            </Weather>
            </MuiThemeProvider> 
            <MuiThemeProvider>
            <Weather className="five">
            </Weather>
            </MuiThemeProvider> 
          </div>
       </div>
    );
  }
}

class CurrentWeatherHeader extends Component {
  render(){
    return(
      <div className='header'>
        <img className= 'header-image' src={ require('./images/cloudy_day.png') } />
      </div>
    );
  }
}

class Weather extends Component {
  render() {
    return(
    <Paper style={WeatherStyle} zDepth={1}>
      <div className='weather'>
        <h3>{this.props.currWeather}</h3>
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

const LocationBox = () => (
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

const EnterButton = () => (
  <div>
    <FlatButton className="button" label="Enter" />
  </div>
);

export default App;
