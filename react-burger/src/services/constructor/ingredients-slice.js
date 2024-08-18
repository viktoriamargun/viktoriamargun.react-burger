import { createSlice } from '@reduxjs/toolkit';

export const ingredientsSlice = createSlice({
  name: 'ingredients_count',
  initialState: {},
  reducers: {
    setIngredients: (state, action) => {
      return action.payload.reduce((acc, ingredient) => {
        acc[ingredient._id] = { ...ingredient, count: 0 };
        return acc;
      }, {});
    },
    decrementIngredient: (state, action) => {
      const ingredient = state[action.payload];
      if (ingredient && ingredient.count > 0) {
        ingredient.count -= 1;
      }
    },
    incrementIngredient: (state, action) => {
      const ingredient = state[action.payload];
      if (ingredient) {
        ingredient.count += 1;
      }
    },
  },
});

export const { setIngredients, decrementIngredient, incrementIngredient } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;