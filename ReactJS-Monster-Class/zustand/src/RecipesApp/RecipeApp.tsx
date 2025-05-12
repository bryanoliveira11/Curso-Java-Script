import { useState } from "react";
import { useRecipe } from "./store/useRecipe";
import type { Recipe } from "./types";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

export default function RecipeApp() {
  const { recipes, addRecipe, removeRecipe } = useRecipe();
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  const handleAddRecipe = () => {
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    ) {
      toast.warn("Recipe Fields are Empty");
      return;
    }
    addRecipe({
      id: Date.now(),
      name,
      ingredients: ingredients
        .split(",")
        .map((ingredients) => ingredients.trim()),
      instructions,
    });
    toast.success(`Recipe "${name}" Added`);
    setName("");
    setIngredients("");
    setInstructions("");
  };

  const handleEditRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setName(recipe.name);
    setIngredients(recipe.ingredients.join(","));
    setInstructions(recipe.instructions);
  };

  const handleUpdateRecipe = () => {
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    ) {
      toast.warn("Recipe Fields are Empty");
      return;
    }

    if (editingRecipe) {
      removeRecipe(editingRecipe.id);
      addRecipe({
        id: Date.now(),
        name,
        ingredients: ingredients
          .split(",")
          .map((ingredients) => ingredients.trim()),
        instructions,
      });
      setEditingRecipe(null);
    }
    toast.success(`Recipe "${name}" Updated`);
    setName("");
    setIngredients("");
    setInstructions("");
  };

  const handleRemoveRecipe = (id: number) => {
    toast.success(`Recipe Removed`);
    removeRecipe(id);
  };

  const handleCancelEdit = () => {
    setEditingRecipe(null);
    setName("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center
    bg-gradient-to-r from-emerald-200 to-emerald-500"
    >
      <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
          Recipe Book
        </h1>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={name}
            placeholder="Recipe Name"
            className="w-full px-4 py-2 border rounded-lg border-gray-300
            focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={ingredients}
            placeholder="Ingredients (comma separated)"
            className="w-full px-4 py-2 border rounded-lg border-gray-300
            focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            onChange={(e) => setIngredients(e.target.value)}
          />
          <textarea
            value={instructions}
            placeholder="Instructions"
            className="w-full px-4 py-2 border rounded-lg border-gray-300
            focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            onChange={(e) => setInstructions(e.target.value)}
          />
          <div className="flex justify-between">
            {editingRecipe ? (
              <>
                <button
                  className="btn btn-warning"
                  onClick={handleUpdateRecipe}
                >
                  Update Recipe
                </button>

                <button className="btn btn-soft" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-success" onClick={handleAddRecipe}>
                  Add Recipe
                </button>
              </>
            )}
          </div>
        </div>

        <ul
          className="list bg-zinc-50 border-zinc-200 text-zinc-800
        rounded-box shadow-lg"
        >
          {recipes.length < 1 && (
            <li className="p-4 pb-2 text-xs opacity-70 tracking-wide capitalize">
              your added recipes will show up here
            </li>
          )}

          {recipes.map((recipe) => (
            <li className="list-row" key={recipe.id}>
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
                />
              </div>
              <div>
                <div className="capitalize">{recipe.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {recipe.ingredients.join(", ")}
                </div>
              </div>
              <p className="list-col-wrap text-xs">{recipe.instructions}</p>
              <button
                className="btn btn-square btn-neutral btn-outline"
                onClick={() => handleEditRecipe(recipe)}
              >
                <FaRegEdit size={20} />
              </button>
              <button
                className="btn btn-square btn-neutral btn-outline"
                onClick={() => handleRemoveRecipe(recipe.id)}
              >
                <FaRegTrashAlt size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
