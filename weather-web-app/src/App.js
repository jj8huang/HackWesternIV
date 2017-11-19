import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var finalUrl = "https://hackathon.pic.pelmorex.com/api/search/string?keyword=london&prov=ontario&country=canada";

var locationCode;
var temperature;
var _city = "london";
var _province = "";
var _country = "";


class App extends Component {
  constructor(props) {
    super(props);
    this.onSetTemperature = this.onSetTemperature.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {temp : 1000};
  }
  
  componentWillMount()
  {
    setTemperature(this.onSetTemperature);
  }

  onButtonClick(e)
  {
    e.preventDefault();
    setTemperature(this.onSetTemperature);
  }

  onSetTemperature(data)
  {
    this.setState({temp:data.temp});
  }
  render() {
    const{temp} = this.state;
    return (
       <form onSubmit={this.onButtonClick} className="App">
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
            <Weather temperature={temp} className="one">
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
       </form>
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
    <Paper className = "weatherStyle" zDepth={1}>
      <div className='weather'>
        <h3>{this.props.currWeather}</h3>
        <Divider/>
        <img src={ require('./icons/weather-icons/606794-weather/thunder.png') } />
        <Divider/>
        <p className = "weatherField">Temperature: {this.props.temperature}</p>
        <p className = "weatherField">Precipitation: </p>
        <p className = "weatherField">Windspeed: </p>
      </div>
      </Paper>
    );
  }
}

class LocationBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    _city = this.state.value;

  };

  render() {
    return(
    <div>
      <TextField hintText="Location" 
        id="text-field-controlled"
        value={this.state.value}
        onChange={this.handleChange}
       />
    </div>
    );
  }
}

const EnterButton = () => (
  <div>
    <FlatButton type="submit" className="button" label="Enter" />
    <br />
    <br />
  </div>
);

async function getLocationCode (callback){
    //get user inputs 
    var city= _city;//document.getElementById("city").value;
    var province = _province;//document.getElementById("province").value;
    var country = _country; //document.getElementById("country").value;
    
    //set the url to fetch 
    finalUrl="https://hackathon.pic.pelmorex.com/api/search/string?keyword="+city +"&prov="+province+"&country="+country;
    
   
   // fetch function
    fetch(finalUrl)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        locationCode=data.code;
        callback(); 
        //console.log(data);
    })
}


async function setTemperature(callback){
    getLocationCode(function() {
        finalUrl="https://hackathon.pic.pelmorex.com/api/data/longterm?locationcode="+locationCode;
        // document.getElementById("place").innerHTML = finalUrl;
        fetch(finalUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            //temperature=data.data.temp;
           // console.log(data.data);
            callback(data.data);
            // document.getEllementById("temp").innerHTML=data.data.temp;
         })
    })
}

export default App;
