import React, { useContext } from 'react'
import { DispatchContext, StateContext } from '../../../Store/Context'
import Button from 'react-bootstrap/Button';
import './RecipeButton.css';

const RecipeButton = (props) => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)

  const addRecipe = (props) => {
    dispatch(props);
  }

  const removeRecipe = (props) => {
    if (state[props.recipe] > 0) {
      dispatch(props);
    }
  }

  return (
    <div className="button-container">
      {props.label}:
      <Button className="add-button" variant="outline-info" onClick={() => addRecipe({ type: props.add, recipe: props.recipe })} > Add </Button>
      <Button className="remove-button" variant="outline-danger" onClick={() => removeRecipe({ type: props.remove, recipe: props.recipe })} > Remove </Button>
    </div>
  )
}

export default RecipeButton;
