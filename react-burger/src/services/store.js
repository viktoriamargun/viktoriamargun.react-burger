import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer.js';

const store = configureStore({
  reducer: rootReducer,
});

export default store;