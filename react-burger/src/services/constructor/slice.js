import {createSelector, createSlice, nanoid} from '@reduxjs/toolkit';

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
    addIngredient: {
      reducer: (state, action) => {
        state.ingredients.push(action.payload);
      },
      prepare: (ingredient) => {
        return { payload: {...ingredient, key: nanoid() }}
      },
    },
    moveIngredient: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      state.ingredients.splice(
          hoverIndex,
          0,
          state.ingredients.splice(dragIndex, 1)[0]
      );
    },
    removeIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter(ingredient => ingredient.key !== action.payload);
    },
    resetConstructor: () => ({
      bun: null,
      ingredients: [],
    }),
  },
  selectors: {
    bun: state => state.bun,
    ingredients: state => state.ingredients,
    statistics: createSelector(
        state => state,
        ({ bun, ingredients }) => {
          let stat = {};

          if (bun) {
            stat[bun._id] = 2
          }

          return ingredients.reduce((acc, ingredient) => {
            acc[ingredient._id] = (acc[ingredient._id] ?? 0) + 1;
            return acc;
          }, stat);
        }
    )
  }
});

export const { addBun, addIngredient, removeIngredient, moveIngredient, resetConstructor } = burgerConstructorSlice.actions;
