import React, { useContext } from 'react'
import './Burger.css';
import BurgerRecipe from './BurgerRecipe/BurgerRecipe';
import Type from '../../types';
import { StateContext } from '../../Store/Context';

const Burger = () => {
  const state = useContext(StateContext);
  let burgerRecipe = Object.keys(state).map(
    recipeKey => {
      return [...Array(state[recipeKey])].map(
        (_, i) => {
          return <BurgerRecipe key={recipeKey + i} type={recipeKey} />
        }
      )
    }
  ).reduce((prev, curr) => {
    return prev.concat(curr)
  }, []);

  if (burgerRecipe.length === 0) {
    burgerRecipe = <p>Add recipes here</p>
  }

  return (
    <div className="burger">
      <BurgerRecipe type={Type.Recipe.topBread} />
      {burgerRecipe}
      <BurgerRecipe type={Type.Recipe.bottomBread} />
    </div>
  )
}

export default Burger;
