import React, { useState } from 'react';
import styles from './app-content.module.css';
import BurgerIngredients from './burgeringredients/burgeringredients';
import BurgerConstructor from './burgerconstructor/burgerconstructor';

function AppContent({ ingredients }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

    return (
      <main className={ styles.content }>
        <BurgerIngredients openModal={openModal} ingredients={ ingredients }/>
        <BurgerConstructor openModal={openModal} ingredients={ ingredients }/>
        <div id="react-modals"></div>
      </main>
    );
  }

export default AppContent;