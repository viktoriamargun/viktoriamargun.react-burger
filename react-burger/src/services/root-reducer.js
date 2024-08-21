import { burgerConstructorSlice } from "./constructor/slice.js";
import { ingredientsSlice } from "./ingredients/slice.js";
import {combineSlices} from "@reduxjs/toolkit";
import {selectedIngredientSlice} from "./selectedingredient/slice";

const rootReducer = combineSlices(
    burgerConstructorSlice,
    ingredientsSlice,
    selectedIngredientSlice
);

export default rootReducer;