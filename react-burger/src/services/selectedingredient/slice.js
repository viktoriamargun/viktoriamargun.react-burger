import {createSlice} from "@reduxjs/toolkit";

export const selectedIngredientSlice = createSlice({
    name: "selectedIngredient",
    initialState: {
        selectedIngredient: null
    },
    reducers: {
        selectIngredient: (state, action) => {
            state.selectedIngredient = action.payload;
        },
        clearSelectedIngredient: (state, action) => {
            state.selectedIngredient = null;
        }
    },
    selectors: {
        selectedIngredient: (state) => state.selectedIngredient,
    }
});

export const { selectIngredient, clearSelectedIngredient } = selectedIngredientSlice.actions;