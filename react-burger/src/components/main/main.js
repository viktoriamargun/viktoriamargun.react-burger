import React from 'react';
import './main.css';

import BurgerIngredients from './ingredients/ingredients';
import BurgerConstructor from './burgerconstructor/burgerconstructor';

class AppContent extends React.Component {
  render() {
    return (
      <main className='content'> 
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    );
  }
}

export default AppContent;