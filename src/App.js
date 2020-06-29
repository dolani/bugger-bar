import React from 'react';
import './App.css';
import Burger from './Components/Burger/Burger';
import RecipeCounter from './Components/RecipeCounter/RecipeCounter';

const App = () => {
  return (
    <div className="App">
      <h2>Select preferred recipe and make order here</h2>
      <Burger />
      <RecipeCounter />
    </div>
  );
}

export default App;
