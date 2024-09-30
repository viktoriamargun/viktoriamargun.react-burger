import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/main/modal/ingredient-details.jsx';
import { ingredientsSlice } from '../../services/ingredients/slice'; 
import styles from './full-page.module.css';

function FullPage() {
  const { id } = useParams(); 

  const ingredients = useSelector(ingredientsSlice.selectors.ingredients);
  
  const selectedIngredient = ingredients.find(ingredient => ingredient._id === id);

  if (!selectedIngredient) {
    return <p>Ингредиент не найден</p>;
  }

  return (
    <div className={styles.contentbody}>
      <div className={styles.formholder}>
        <h1 className={` ${ 'text' } ${ 'text_type_main-large' } ${ 'pl-0' } ${ 'pt-0' } ${ 'pr-0' } ${ 'pb-0' }` }>Детали ингредиента</h1>
        <IngredientDetails details={selectedIngredient} />
      </div>
    </div>
  );
}

export default FullPage;
