import React, { useState, createContext, useContext } from "react";

// Create a context for meals
export const MealsContext = createContext();

const todaysMeals = [
  { id: 1, name: "Baked Beans" },
  { id: 2, name: "Baked Sweet Potatoes" },
  { id: 3, name: "Baked Potatoes" },
];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  // Function to toggle the ticked property of a meal
  const tickMeal = (id) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === id ? { ...meal, ticked: !meal.ticked } : meal
      )
    );
  };

  // Provide the context value to the children
  return (
    <MealsContext.Provider value={{ meals, tickMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;