import React from 'react'
import RecipeButton from './RecipeButton/RecipeButton'

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' }
]

const RecipeCounter = () => {
  return (
    <div>
      {controls.map(ctr =>
        <RecipeButton key={ctr.label} label={ctr.label} recipe={ctr.type} add="increment" remove="decrement" />
      )}
    </div>
  )
}

export default RecipeCounter
