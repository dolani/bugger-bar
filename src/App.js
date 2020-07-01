import React from 'react';
import './App.css';
import Burger from './Components/Burger/Burger';
import RecipeCounter from './Components/RecipeCounter/RecipeCounter';
import { RecipeProvider } from './Store/Context';

const App = () => {
  return (
    <div className="App">
      <RecipeProvider>
        <h2>Select preferred recipe and make order here</h2>
        <Burger />
        <RecipeCounter />
      </RecipeProvider>
    </div>
  );
}

export default App;
