import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setCookie, deleteCookie, getCookie } from '../../utils/cookies';

const initialState = {
  user: {},
  accessToken: null,
  refreshToken: null,
  status: 'idle',
  error: null,
  loading: false,
};

const saveTokensToCookies = (accessToken, refreshToken) => {
  setCookie('accessToken', accessToken, { expires: 3600 * 1000 }); // 1 час
  setCookie('refreshToken', refreshToken, { expires: 7 * 24 * 3600 * 1000 }); // 7 дней
};

// Регистрация
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    console.log('Отправка запроса с данными:', userData);
    
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const responseBody = await response.json();
      console.log('Ответ сервера:', responseBody);

      if (!response.ok) {
        return rejectWithValue(`Ошибка ${response.status}: ${responseBody.message || 'Network response was not ok'}`);
      }

      if (!responseBody.success) {
        return rejectWithValue(`Ошибка: ${responseBody.message || 'Регистрация не удалась'}`);
      }

      return responseBody;

    } catch (error) {
      return rejectWithValue(error.message || 'Неизвестная ошибка');
    }
  }
);

// Авторизация
export const loginUser = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await fetch('https://norma.nomoreparties.space/api/auth/login', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Ошибка авторизации');
    const data = await response.json();

    saveTokensToCookies(data.accessToken, data.refreshToken);

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


// Выход из системы
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  const refreshToken = getCookie('refreshToken');
  if (!refreshToken) {
    return rejectWithValue('Refresh token not found');
  }
  try {
    const response = await fetch('https://norma.nomoreparties.space/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: refreshToken }),
    });
    if (!response.ok) {
      return rejectWithValue('Ошибка выхода из системы');
    }
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


// Получение данных пользователя с обработкой ошибки 403
export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, { dispatch, rejectWithValue }) => {
    const accessToken = getCookie('accessToken');
    
    if (!accessToken) {
      console.error('Ошибка: Токен доступа не найден');
      return rejectWithValue('Токен доступа не найден');
    }

    try {
      const response = await fetch('https://norma.nomoreparties.space/api/auth/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 403 || response.status === 401) {
        console.log('Токен недействителен. Обновляем токен...');
        const refreshResult = await dispatch(refreshToken());

        if (refreshToken.fulfilled.match(refreshResult)) {
          const newAccessToken = getCookie('accessToken');
          console.log('Токен успешно обновлен. Повторяем запрос...');
          
          const retryResponse = await fetch('https://norma.nomoreparties.space/api/auth/user', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${newAccessToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (!retryResponse.ok) {
            console.error('Ошибка при повторном запросе');
            throw new Error('Ошибка при повторном запросе');
          }

          const retryData = await retryResponse.json();
          return retryData.user;
        } else {
          console.error('Ошибка: Не удалось обновить токен.');
          return rejectWithValue('Не удалось обновить токен.');
        }
      }

      if (!response.ok) {
        console.error('Ошибка получения данных пользователя');
        throw new Error('Ошибка получения данных пользователя');
      }

      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error('Ошибка при запросе:', error.message);
      return rejectWithValue(error.message);
    }
  }
);



// Обновление данных пользователя
export const updateUserData = createAsyncThunk(
  'auth/updateUserData',
  async (userData, { rejectWithValue }) => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) {
      return rejectWithValue('Токен доступа не найден');
    }

    try {
      const response = await fetch('https://norma.nomoreparties.space/api/auth/user', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Ошибка обновления данных пользователя');
      }

      const data = await response.json();
      return data.user; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Обновление токена
export const refreshToken = createAsyncThunk('auth/refreshToken', async (_, { rejectWithValue }) => {
  const refreshToken = getCookie('refreshToken');
  
  if (!refreshToken) {
    return rejectWithValue('Refresh token not found');
  }
  
  try {
    const response = await fetch('https://norma.nomoreparties.space/api/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: refreshToken }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Ошибка обновления токена');
    }

    saveTokensToCookies(data.accessToken, data.refreshToken); 

    return data;
  } catch (error) {
    if (error.message.includes('401')) {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      return rejectWithValue('Не удалось обновить токен. Пожалуйста, войдите снова.');
    }

    return rejectWithValue(error.message);
  }
});


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Регистрация
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        saveTokensToCookies(action.payload.accessToken, action.payload.refreshToken);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })

      // Авторизация
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user || {};
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        saveTokensToCookies(action.payload.accessToken, action.payload.refreshToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        if (action.payload.includes('403')) {
          state.error = 'Доступ запрещен. Проверьте свои права.';
        } else {
          state.error = action.payload; 
        }
      })

      // Выход из системы
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        deleteCookie('refreshToken');
        deleteCookie('accessToken');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Получение данных пользователя
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Обновление данных пользователя
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Обновление токена
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        saveTokensToCookies(action.payload.accessToken, action.payload.refreshToken);
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
    },
});

export default authSlice.reducer;

