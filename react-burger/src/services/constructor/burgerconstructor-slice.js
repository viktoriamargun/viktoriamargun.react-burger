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
    moveIngredient: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const draggedItem = state.ingredients[dragIndex];
      state.ingredients.splice(dragIndex, 1);
      state.ingredients.splice(hoverIndex, 0, draggedItem);
    },
    removeIngredient: (state, action) => {
      const { id } = action.payload;
      const index = state.ingredients.findIndex(ingredient => ingredient._id === id);
      if (index !== -1) {
        state.ingredients.splice(index, 1);
      }
    },
    resetConstructor: () => ({
      bun: null,
      ingredients: [],
    }),
  },
});

export const { addBun, addIngredient, removeIngredient, moveIngredient, resetConstructor } = burgerConstructorSlice.actions;

export const selectIngredientsCount = (state) => state.burgerConstructor.ingredients.length;

export default burgerConstructorSlice.reducer;
