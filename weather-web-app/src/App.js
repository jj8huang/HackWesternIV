import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
       <div className="App">
    {/*     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to WEATHER LAND</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <Test />
    //     <Test />
    //     <Test />
    //     <Test />*/}
    <MuiThemeProvider>
    <TextFieldExampleSimple >
    </TextFieldExampleSimple>
    </MuiThemeProvider>
       </div>
    );
  }
}

class Test extends Component {
  render(){
    return(
    <div>
      <h1>TEEEEEEEEEEEEEEEEEEEEEEEEEEESSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTTTTT</h1>
    </div>
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


export default App;
