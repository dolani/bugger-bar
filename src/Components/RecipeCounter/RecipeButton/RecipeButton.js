import React, { useContext } from 'react'
import { DispatchContext, StateContext } from '../../../Store/Context'

const RecipeButton = (props) => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)
  
  const addRecipe = (props) => {
    
    console.log('proped', props);
    dispatch(props);
  }

  const removeRecipe = (props) => {
    if (state[props.recipe] > 0) {
      dispatch(props);
    }
  }

  return (
    <div>
      {props.label}
      <button onClick={() => addRecipe({ type: props.add, recipe: props.recipe })} > Add </button>
      <button onClick={() => removeRecipe({ type: props.remove, recipe: props.recipe })} > Remove </button>
    </div>
  )
}

export default RecipeButton;
