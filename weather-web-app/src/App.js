import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
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
            <Weather className="one">
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
            <MuiThemeProvider>
            <Weather className="six">
            </Weather>
            </MuiThemeProvider> 
            <MuiThemeProvider>
            <Weather className="seven">
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
    <Paper className = "WeatherStyle" zDepth={1}>
      <div className='weather'>
        <h3>{this.props.currWeather}</h3>
        <Divider/>
        <img src={ require('./images/sun.png') } />
        <Divider/>
        <p className = "weatherField">Temperature: </p>
        <p className = "weatherField">Precipitation: </p>
        <p className = "weatherField">Windspeed: </p>
      </div>
      </Paper>
    );
  }
}

class LocationBox extends Component {
  render() {
    return(
    <div>
      <TextField hintText="Location" />
    </div>
    );
  }
}

const EnterButton = () => (
  <div>
    <FlatButton className="button" label="Enter" />
    <br />
    <br />
  </div>
);

export default App;
