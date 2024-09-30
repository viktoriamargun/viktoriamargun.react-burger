import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../utils/api';

// Регистрация пользователя
export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const data = await request('auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Авторизация пользователя
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await request('auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Выход пользователя
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await request('auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Обновление токена
export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (refreshToken, { rejectWithValue }) => {
    try {
      const data = await request('auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: refreshToken }),
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
