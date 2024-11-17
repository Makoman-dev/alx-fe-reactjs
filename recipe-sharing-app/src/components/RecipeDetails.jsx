import React from 'react';
import { useRecipeStore } from './recipeStore'; // Import the recipe store
import EditRecipeForm from './EditRecipeForm'; // Import EditRecipeForm component
import DeleteRecipeButton from './DeleteRecipeButton'; // Import DeleteRecipeButton component

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>; // Handle case where recipe is not found
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <EditRecipeForm recipe={recipe} />  {/* Pass the recipe data to EditRecipeForm */}
      <DeleteRecipeButton recipeId={recipeId} />  {/* Pass the recipe ID to DeleteRecipeButton */}
    </div>
  );
};

export default RecipeDetails;