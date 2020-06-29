import React from 'react';
import './App.css';
import Burger from './Components/Burger/Burger';

const App = () => {
  return (
    <div className="App">
      <h2>Select preferred recipe and make order here</h2>
      <Burger />
      <h3>Another component is supposed to be here</h3>
    </div>
  );
}

export default App;
