import React, { useContext } from 'react'
import { DispatchContext, StateContext } from '../../Store/Context'

const RecipeCounter = () => {
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
    <div>
      <div>
        Meat
        <button onClick={() => addRecipe({ type: "increment", recipe: "meat" })} > Add </button>
        <button onClick={() => removeRecipe({ type: "decrement", recipe: "meat" })} > Remove </button>
      </div>
      {/* <p>
        Cheese
        <button onClick={() => { }} > Add</button>
        <button onClick={() => { }} > Remove</button>
      </p>
      <p>
        Bacon
        <button onClick={() => { }} > Add</button>
        <button onClick={() => { }} > Remove</button>
      </p>
      <p>
        Salad
        <button onClick={() => { }} > Add</button>
        <button onClick={() => { }} > Remove</button>
      </p> */}
      {/* <button onClick={() => dispatch({ type: "increment", payload: state })} > plus</button> */}
    </div>
  )
}

export default RecipeCounter

