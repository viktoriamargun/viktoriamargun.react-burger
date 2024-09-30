import {createSelector, createSlice} from '@reduxjs/toolkit';
import {fetchIngredients} from "./actions";

const initialState = {
  ingredients: [],
  loading: false,
  error: null
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    state: state => state,
    ingredients: (state) => state.ingredients,
    buns: createSelector(
        state => state.ingredients,
        ingredients => ingredients.filter(el => el.type === 'bun')
    ),
    mains: createSelector(
        state => state.ingredients,
        ingredients => ingredients.filter(el => el.type === 'main')
    ),
    sauces: createSelector(
        state => state.ingredients,
        ingredients => ingredients.filter(el => el.type === 'sauce')
    )
  },
  extraReducers: builder => {
    builder
        .addCase(fetchIngredients.pending, (state, action) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchIngredients.fulfilled, (state, action) => {
          state.ingredients = action.payload;
          state.loading = false;
        })
        .addCase(fetchIngredients.rejected, (state, action) => {
          state.error = action.payload;
          state.loading = false;
        })
  }
});