import React, { Component } from 'react';
import './App.css';
import PictureBoard from './PictureBoard/PictureBoard';

class App extends Component {
  returnInput= () => { 
    let tempPicture =[
      {
        name: document.getElementById('name').value,
        url: document.getElementById('url').value,
        alt: document.getElementById('alt').value
      }
    ];
    document.getElementById('name').value='';
    document.getElementById('url').value='';
    document.getElementById('alt').value='';
      return tempPicture;
    
  };
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Totally Not Pinterest</h1>
        </header>
        <hr/>

        <div className="CompAdder">
          <label> Name:</label> <input name="name" id="name" />
          <label> URL:</label> <input name="url" id="url" />
          <label> alt:</label> <input name="alt" id="alt" />
 
        </div>
        <div className="PictureContainer">
          <PictureBoard added={this.returnInput} ></PictureBoard>
        </div>
      </div>
    );
  }
}

export default App;
