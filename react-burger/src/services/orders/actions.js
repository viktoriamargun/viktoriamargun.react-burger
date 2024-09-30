import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../utils/api';

export const sendOrder = createAsyncThunk(
  'order/sendOrder',
  async (ingredientsIds, { rejectWithValue }) => {
    try {
      const data = await request('orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: ingredientsIds }),
      });
      return data.order.number;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
