import React from 'react';
import { useRecipeStore } from './recipeStore'; // Import the recipe store

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore(); // Import deleteRecipe action

  const handleDelete = () => {
    deleteRecipe(recipeId); // Call deleteRecipe action with the recipe ID
    // Handle successful deletion or display error message
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;