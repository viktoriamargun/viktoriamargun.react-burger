import React from 'react';
import styles from './main.module.css';

import BurgerIngredients from './burgeringredients/burgeringredients';
import BurgerConstructor from './burgerconstructor/burgerconstructor';

function AppContent() {
    return (
      <main className={ styles.content }>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    );
  }

export default AppContent;