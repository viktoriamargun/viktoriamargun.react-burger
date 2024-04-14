import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchIngredients } from '../../services/ingredients/fetch-data.js';
// import { useEffect, useState } from "react";
import './app.module.css';
import AppHeader from '../header/header.js';
import AppContent from '../main/app-content.js';


function App() {
  // const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   fetch(dataApi)
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       throw new Error();
  //     }
  //   })
  //   .then(data => {
  //     setIngredients(data.data);
  //   })
  //   .catch(error => {
  //     console.error('Произошла ошибка:', error);
  //   });
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);  

  return (
    <>
      <AppHeader />
      <AppContent />
    </>
  );
}

export default App;
