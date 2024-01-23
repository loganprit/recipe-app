import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // State for each input field
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

// Update state for each field
function handleNameChange(event) {
  setName(event.target.value);
}

function handleCuisineChange(event) {
  setCuisine(event.target.value);
}

function handlePhotoChange(event) {
  setPhoto(event.target.value);
}

function handleIngredientsChange(event) {
  setIngredients(event.target.value);
}

function handlePreparationChange(event) {
  setPreparation(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  // Create a new recipe object
  const newRecipe = {
    name,
    cuisine,
    photo,
    ingredients,
    preparation,
  };
  
  // Call the addRecipe function with the new recipe object
  addRecipe(newRecipe);
  
  // Reset form fields
  setName('');
  setCuisine('');
  setPhoto('');
  setIngredients('');
  setPreparation('');
}

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
            </td>
            <td>
              <input type="text" name="cuisine" id="cuisine" value={cuisine} onChange={handleCuisineChange} />
            </td>
            <td>
              <input type="url" name="photo" id="photo" value={photo} onChange={handlePhotoChange} />
            </td>
            <td>
              <textarea type="text" name="ingredients" id="ingredients" value={ingredients} onChange={handleIngredientsChange} />
            </td>
            <td>
              <textarea type="text" name="preparation" id="preparation" value={preparation} onChange={handlePreparationChange} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
