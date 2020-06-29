import React from 'react'
import './BurgerRecipe.css';

const BurgerRecipe = (props) => {

  let recipe = null;
  switch (props.type) {
    case 'top-bread':
      return (
        <div className='top-bread'>
          <div className='seeds1'></div>
          <div className='seeds2'></div>
        </div>
      )
    case 'bottom-bread':
      return <div className='bottom-bread'></div>
    case 'meat':
      return <div className='meat'></div>
    case 'cheese':
      return <div className='cheese'></div>
    case 'bacon':
      return <div className='bacon'></div>
    case 'salad':
      return <div className='salad'></div>
    default:
      return recipe;
  }
}

// recipe.propTypes = {
//   type: PropTypes.string.isRequired
// };

export default BurgerRecipe;
