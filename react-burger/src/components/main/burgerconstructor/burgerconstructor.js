import React from "react";
import styles from './burgerconstructor.module.css';

import TopElement from './top-element/top-element.jsx';
import MainElement from './main-element/main-element.jsx';
import BottomElement from './bottom-element/bottom-element.jsx';
import BottomPrice from './bottom-price/bottom-price.jsx';

function BurgerConstructor() {
    return (
      <section className={` ${styles.content_right} ${ 'pt-25' }`} >
        <TopElement />
        <MainElement />
        <BottomElement />
        <BottomPrice />      
      </section>
    );
  }

export default BurgerConstructor;