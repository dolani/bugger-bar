import React, { useReducer } from 'react'

const initialRecipeState = {
  "salad": 0,
  "bacon": 0,
  "cheese": 0,
  "meat": 0
}
const StateContext = React.createContext();
const DispatchContext = React.createContext();

const recipeReducer = (state, action) => {
  const recipe = action.recipe;
  switch (action.type) {
    case 'increment':
      return { ...state, [recipe]: state[recipe] + 1 };
    case 'decrement':
      return { ...state, [recipe]: state[recipe] - 1 };
    default:
      return { ...state };
  }
}

const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialRecipeState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export { StateContext, DispatchContext, RecipeProvider };
