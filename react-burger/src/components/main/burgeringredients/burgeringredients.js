import React from 'react';
import { useState } from "react";
import styles from './burgeringredients.module.css';
import TabL from './nav-tab/nav-tab.jsx';
import CardBun from './card-bun/card-bun.jsx';
import CardSauce from './card-sauce/card-sauce.jsx';
import CardMain from './card-main/card-main.jsx';

function BurgerIngredients({ ingredients }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <section className={ styles.content_left }>
      <div className={`${ 'p40' } ${ 'pb-5' }` }>
        <h1 className={` ${ 'text' } ${ 'text_type_main-large' }` }>Соберите бургер</h1>
      </div>
      
      <div className={ styles.tab_content }>
        <div className={ styles.tab_nav }><TabL /></div>
        
        <div className={`${ styles.scrollbox } ${ 'custom-scroll' }` }>
          <div id="one">
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' }` } style={{ padding: '0 0 24px 0' }}>Булки</h2>
            <div className={ styles.ingr_holder }>  
              <CardBun data={ ingredients } openModal={openModal} />
            </div>
          </div>
          
          <div id="two">
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' }` } style={{ padding: '40px 0 24px 0' }}>Соусы</h2>
            <div className={ styles.ingr_holder }>  
              <CardSauce data={ ingredients } />
            </div>
          </div>
          
          <div  id="three">
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' }` } style={{ padding: '40px 0 24px 0' }}>Начинки</h2>
            <div className={ styles.ingr_holder }>  
              <CardMain data={ ingredients } />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
export default BurgerIngredients;