import { useEffect, useState } from "react";
import './app.module.css';
import AppHeader from '../header/header.js';
import AppContent from '../main/app-content.js';

const dataApi = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(dataApi)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .then(data => {
      setIngredients(data.data);
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    });
  }, []);

  return (
    <>
      <AppHeader />
      <AppContent ingredients={ingredients} />
    </>
  );
}

export default App;
