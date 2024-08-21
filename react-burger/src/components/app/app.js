import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './app.module.css';
import AppHeader from '../header/header.js';
import AppContent from '../main/app-content.js';
import {ingredientsSlice} from "../../services/ingredients/slice";
import {fetchIngredients} from "../../services/ingredients/actions";


function App() {
  const {loading, error, ingredients} = useSelector(ingredientsSlice.selectors.state)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <>
      <AppHeader />
        {loading ? (
            <p>Загрузка...</p>
        ) : error ? (
            <p>Ошибка: {error.message}</p>
        ) : ingredients.length ? (
            <AppContent />
        ) : (
            <p>Нет данных</p>
        )}
    </>
  );
}

export default App;
