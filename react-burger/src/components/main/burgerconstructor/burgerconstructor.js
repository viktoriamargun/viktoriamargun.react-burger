import React from 'react';
import styles from './burgerconstructor.module.css';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../../../services/ingredients/fetch-data.js';

import TopElement from './top-element/top-element.jsx';
import MainElement from './main-element/main-element.jsx';
import BottomElement from './bottom-element/bottom-element.jsx';
import BottomPrice from './bottom-price/bottom-price.jsx';

function BurgerConstructor() {
  const ingredients = useSelector(selectIngredients);

    return (
      <section className={` ${styles.content_right} ${ 'pt-25' }`} >
        <TopElement items={ ingredients } />
        <MainElement items={ ingredients } />
        <BottomElement items={ ingredients } />
        <BottomPrice items={ ingredients } />      
      </section>
    );
  }

export default BurgerConstructor;