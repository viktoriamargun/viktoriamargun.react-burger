import { createSlice } from '@reduxjs/toolkit';

const dataApi = "https://norma.nomoreparties.space/api/ingredients";

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    list: [],
  },
  reducers: {
    setIngredients: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setIngredients } = ingredientsSlice.actions;

export const fetchIngredients = () => async (dispatch) => {
  try {
    const response = await fetch(dataApi);
    if (!response.ok) {
      throw new Error('Failed to fetch ingredients from API');
    }
    const data = await response.json();
    dispatch(setIngredients(data.data));
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
};

export const selectIngredients = (state) => state.ingredients.list;

export default ingredientsSlice.reducer;