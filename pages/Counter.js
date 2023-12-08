import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const Counter = () => {
  // Access meals from the context
  const { meals } = useContext(MealsContext);

  // Filter meals that have not been ticked
  const remainingMeals = meals.filter((meal) => !meal.ticked).length;

  return (
    <div>
      <h3>Meals Remaining: {remainingMeals}</h3>
    </div>
  );
};

export default Counter;