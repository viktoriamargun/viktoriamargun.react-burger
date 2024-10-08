import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../utils/api';

export const sendOrder = createAsyncThunk(
  'order/sendOrder',
  async ({ ingredientsIds, token }, { rejectWithValue }) => {
    try {
      const data = await request('orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({ ingredients: ingredientsIds }),
      });
      return data.order.number;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


// import { createSlice } from '@reduxjs/toolkit';
// import { sendOrder } from './path/to/your/asyncThunk';

// const orderSlice = createSlice({
//   name: 'order',
//   initialState: {
//     orderNumber: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(sendOrder.pending, (state) => {
//         state.loading = true;
//         state.error = null; // Сброс ошибки при новом запросе
//       })
//       .addCase(sendOrder.fulfilled, (state, action) => {
//         state.loading = false;
//         state.orderNumber = action.payload; // Успешный результат
//       })
//       .addCase(sendOrder.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload; // Обработка ошибки
//       });
//   },
// });

// export const orderReducer = orderSlice.reducer;
