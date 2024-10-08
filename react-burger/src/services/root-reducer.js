import { burgerConstructorSlice } from "./constructor/slice.js";
import { ingredientsSlice } from "./ingredients/slice.js";
import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from "./auth/authSlice.js";

const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorSlice.reducer,
    ingredients: ingredientsSlice.reducer,
    auth: authSlice.reducer,
  });

export default rootReducer;
