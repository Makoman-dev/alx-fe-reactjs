import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore'; // Import the recipe store

const EditRecipeForm = ({ recipe }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe); // Initialize form with existing recipe data
  const { updateRecipe } = useRecipeStore(); // Import updateRecipe action

  const handleChange = (e) => {
    setUpdatedRecipe({ ...updatedRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(updatedRecipe); // Call updateRecipe action with updated recipe data
    // Handle successful update or display error message
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={updatedRecipe.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={updatedRecipe.description}
        onChange={handleChange}
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;