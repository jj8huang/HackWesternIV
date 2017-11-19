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
  render() {
    return (
      <form className="App">
      <div className="Header">
        <CurrentWeatherHeader>
        </CurrentWeatherHeader>
      </div>
      <div className="Location">
        <MuiThemeProvider>
          <LocationBox>
          </LocationBox>
        </MuiThemeProvider>           
      </div>
      <div className = "SevenDayForecast">
        <MuiThemeProvider>
          <SevenDayForecast>
          </SevenDayForecast>
        </MuiThemeProvider>
      </div>
      <div className = "Suggestions">
      </div>
      </form>
    );
  }
}

class CurrentWeatherHeader extends Component {
  render(){
    return(
      <div className='header'>
        <img className= 'header-image' src={ require('./icons/Partially cloudy night.png') } />
      </div>
    );
  }
}

class SevenDayForecast extends Component {
  constructor(props) {
    super(props);
    this.onSetTemperature = this.onSetTemperature.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {temp : 1000, prec : 1000};
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
    this.setState({temp:data});
  }

  renderWeather(weekday) {
    //const{temp} = this.state;
    return (
    <MuiThemeProvider>
      <Weather title={weekday} temperature={this.state.temp}/>
    </MuiThemeProvider>
    );
  }

  render() {
    return (
      <form onSubmit={this.onButtonClick} className="App">
      <MuiThemeProvider>
        <EnterButton>
        </EnterButton>
      </MuiThemeProvider>
        <div className="SevenDays">
          {this.renderWeather("Sunday")}
          {this.renderWeather("Monday")}
          {this.renderWeather("Tuesday")}
          {this.renderWeather("Wednesday")}
          {this.renderWeather("Thursday")}
          {this.renderWeather("Friday")}
          {this.renderWeather("Saturday")}
        </div>
      <SuggestionBox weatherData={this.state}/>

      </form>
    );
  }
}

class Weather extends Component {
  render() {
    return(
      <Paper className = "weatherStyle" zDepth={0}>
        <div className='weather'>
        <h3>{this.props.title}</h3>
          <img src={ require('./icons/weather-icons/606794-weather/thunder.png') } className="weatherImg"/>
          <p className = "weatherField">Temperature: {this.props.weather.temp}</p>
          <p className = "weatherField">Precipitation: {this.props.weather.precipitation} </p>
          <p className = "weatherField">Windspeed: {this.props.weather.windSpeed}</p>
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

class SuggestionBox extends Component {
  constructor(props){
    super(props);
    console.log(props.weatherData.temp);
    this.chooseSuggestion = this.chooseSuggestion.bind(this);
  }

  chooseSuggestion(temp, windspeed, precip, feelsLike){
    var suggestion = '';
    var isCold = false;
    var bringUmbrella = false;

    //Comment on temperature
    if(temp < -15) {
      suggestion = "Whoa! It's freezing today! Make sure to bundle up!";
      isCold = true;
    } else if (temp <= 0 && temp >= -15) {
      suggestion = "It's cold today! Wear a coat.";
      isCold = true;
    } else if (temp > 0 && temp <= 15) {
      suggestion = "It's cool today!";
      isCold = false;
    } else if(temp > 15 && temp <= 26){
      suggestion = "It's warm today!";
    } else if(temp > 26) {
      suggestion = "It's hot today!";
      isCold = false;
    }

    //Take into account precipitation
    if(precip >= 60 && temp > 0) {
      bringUmbrella = true;
    }

    //No rain and it's hot
    if(!bringUmbrella && temp > 15) {
      suggestion = suggestion + " Put on that sunscreen and those sunglasses.";
    }

    //Take into account wind speed
    if(windspeed > 20 && temp > 0) {
      bringUmbrella = false;
      suggestion = suggestion + " It's too windy for an umbrella today.";
    }

    //Decide if should suggest an umbrella
    if(bringUmbrella) {
      suggestion = suggestion + " You should bring an umbrella.";
    }

    return suggestion;
  }

  render() {
    const suggestion = this.chooseSuggestion(this.props.weatherData.temp, this.props.weatherData.windspeed, 
    this.props.weatherData.rain, this.props.weatherData.feelsLike);

    return(
    <div className="suggestionBox">
      {suggestion}
    </div>
    );
  }
}


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
