import { createSlice } from '@reduxjs/toolkit';

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState: {
    bun: null,
    ingredients: [],
  },
  reducers: {
    addBun: (state, action) => {
      state.bun = action.payload;
    },
    addIngredient: (state, action) => {
      state.ingredients.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter(ingredient => ingredient._id !== action.payload);
    },
    resetConstructor: () => ({
      bun: null,
      ingredients: [],
    }),
  },
});

export const { addBun, addIngredient, removeIngredient, resetConstructor } = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
