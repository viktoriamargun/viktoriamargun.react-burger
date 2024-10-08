import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import IngredientDetails from './ingredient-details';

const Ingredient = () => {
  const location = useLocation();
  const ingredients = useSelector(state => state.ingredients.ingredients);
  
  let { id } = useParams();
  if (!id && location.state?.id) {
    id = location.state.id;
  }

  const data = ingredients.find(details => details._id === id) || null;

  if (!data) {
    return <p className='text text_type_main-large'>Ingredient not found</p>;
  }

  return <IngredientDetails details={data} />;
};

export default Ingredient;
