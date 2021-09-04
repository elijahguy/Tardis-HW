import './App.css';
import Div1 from './div1';

import React, { Component } from 'react';



export class App extends Component {
  state = {
    name: 'Time and Relative Dimension in Space',
  };

  render() {
    return (
      <div className='App'>
        

        <div1 dataFromParent={this.state} change={this.changeIt} />
      </div>
    );
  }
}

export default App;