import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './burgeringredients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIngredients } from '../../../services/ingredients/fetch-data.js';
import { setCurrentTab } from '../../../services/ingredients/tabs/tab-slice';

import TabL from './nav-tab/nav-tab.jsx';
import CardBun from './card-bun/card-bun.jsx';
import CardSauce from './card-sauce/card-sauce.jsx';
import CardMain from './card-main/card-main.jsx';

function BurgerIngredients() {
  const ingredients = useSelector(selectIngredients);
  const dispatch = useDispatch();  
  const currentTab = useSelector(state => state.tabs.currentTab);

  const sectionRefs = {
    one: React.useRef(null),
    two:  React.useRef(null),
    three:  React.useRef(null),
  };

  const bunTabTop = sectionRefs.one.current?.getBoundingClientRect().top;
  const sauceTabTop = sectionRefs.two.current?.getBoundingClientRect().top;
  const mainTabTop = sectionRefs.three.current?.getBoundingClientRect().top;
  
  const [refOne, inViewOne] = useInView();
  const [refTwo, inViewTwo] = useInView();
  const [refThree, inViewThree] = useInView();
  
  useEffect(() => {
    if (inViewOne) {
      dispatch(setCurrentTab(bunTabTop));
      console.log('one');
    }
    if (inViewTwo) {
      dispatch(setCurrentTab(sauceTabTop));
      console.log('two');
    }
    if (inViewThree) {
      dispatch(setCurrentTab(mainTabTop));
      console.log('three');
    }
  }, [inViewOne, inViewTwo, inViewThree, dispatch, bunTabTop, sauceTabTop, mainTabTop]);


  return (
    <section className={ styles.content_left }>
      <div className={`${ 'p40' } ${ 'pb-5' }` }>
        <h1 className={` ${ 'text' } ${ 'text_type_main-large' }` }>Соберите бургер</h1>
      </div>
      
      <div className={ styles.tab_content }>
        <div data-header className={ styles.tab_nav }>
          <TabL
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}

            bunTabTop={bunTabTop}
            sauceTabTop={sauceTabTop}
            mainTabTop={mainTabTop}            
            // handleIntersection={handleIntersection}
          />
        </div>
        
        <div data-scroller className={`${ styles.scrollbox } ${ 'custom-scroll' }` }>

          <div id="one" ref={refOne}>
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' } ${ 'pl-0' } ${ 'pt-0' } ${ 'pr-0' } ${ 'pb-6' }` }>Булки</h2>
            <div className={ styles.ingr_holder }>  
              <CardBun data={ ingredients } />
            </div>
          </div>
          
          <div id="two" ref={refTwo}>
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' } ${ 'pl-0' } ${ 'pt-0' } ${ 'pr-0' } ${ 'pb-6' }` }>Соусы</h2>
            <div className={ styles.ingr_holder }>  
              <CardSauce data={ ingredients } />
            </div>
          </div>
          
          <div id="three" ref={refThree}>
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' } ${ 'pl-0' } ${ 'pt-0' } ${ 'pr-0' } ${ 'pb-6' }` }>Начинки</h2>
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