import { burgerConstructorSlice } from "./constructor/slice.js";
import { ingredientsSlice } from "./ingredients/slice.js";
import { combineReducers } from '@reduxjs/toolkit';
import { selectedIngredientSlice } from "./selectedingredient/slice";
import authSlice from "./auth/authSlice.js";

const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorSlice.reducer,
    ingredients: ingredientsSlice.reducer,
    selectedIngredient: selectedIngredientSlice.reducer,
    auth: authSlice,
  });

export default rootReducer;
