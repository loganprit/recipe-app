import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

// TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
// TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // Function to add a new recipe
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  // Function to delete a recipe
  const deleteRecipe = (recipeIndex) => {
    const updatedRecipes = recipes.filter((_, index) => index !== recipeIndex);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} onDelete={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
