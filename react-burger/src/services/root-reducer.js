import { combineReducers } from "redux";
import fetchData from "./ingredients/fetch-data";
import tabSlice from "./ingredients/tabs/tab-slice";

import burgerReducer from "./constructor/burger-slice.js";
import burgerConstructorSlice from "./constructor/burger-slice.js";

import ingredientsSlice from "./constructor/ingredients-slice.js";
import cardsReducer from './constructor/cardSlice.js';


const rootReducer = combineReducers({
  ingredients: fetchData,
  tabs: tabSlice,
  burger: burgerReducer,

  ingredients_count: ingredientsSlice,
  burgerConstructor: burgerConstructorSlice,

  cards: cardsReducer,
});

export default rootReducer;

