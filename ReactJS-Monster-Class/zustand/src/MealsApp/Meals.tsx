import React from "react";
import { useMeals } from "./store/useMeals";

export default function Meals() {
  const { meals, searchQuery, setMeals, setSearchQuery } = useMeals();

  React.useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="min-h-screen p-8 bg-gradient-to-r from-emerald-300 to-teal-600
    flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mb-8 text-neutral">Seafood Recipes</h1>
      <label className="input input-accent">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search for a meal..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>

      <div className="mt-4 flex flex-row gap-2 flex-wrap items-center justify-center">
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div className="card w-84 text-neutral" key={meal.idMeal}>
              <figure className="px-10 pt-10">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{meal.strMeal}</h2>
              </div>
            </div>
          ))
        ) : (
          <div className="chat chat-start w-[30rem] flex items-center justify-center">
            <div className="chat-bubble chat-bubble-warning">
              No Meals Found.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
