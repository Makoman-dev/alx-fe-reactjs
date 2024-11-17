import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);
  const { updateRecipe } = useRecipeStore();

  const handleChange = (event) => {
    setUpdatedRecipe({ ...updatedRecipe, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    updateRecipe(updatedRecipe);
    // Handle successful update or display error message
    alert('Recipe updated successfully!');
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
