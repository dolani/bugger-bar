import React from 'react'
import './Burger.css';
import BurgerRecipe from '../BurgerRecipe/BurgerRecipe';
import Type from '../../types';

const Burger = () => {

  return (
    <div className="burger">
      <BurgerRecipe type={Type.Recipe.TopBread} />
      {/* <BurgerRecipe type={Type.Recipe.Meat} />
      <BurgerRecipe type={Type.Recipe.Cheese} />
      <BurgerRecipe type={Type.Recipe.Bacon} />
      <BurgerRecipe type={Type.Recipe.Salad} /> */}
      <BurgerRecipe type={Type.Recipe.BottomBread} />
    </div>
  )
}

export default Burger;
