import React, { useRef, useEffect } from 'react';
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

  const [current, setCurrent] = React.useState(''); 

  const handleTabClick = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) {
      const top = element.offsetTop;
      setCurrentTab(top);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const currentTab = useSelector(state => state.tabs.currentTab);

  const sectionRefs = {
    one: useRef(null),
    two:  useRef(null),
    three:  useRef(null),
  };
  
  const [refOne, inViewOne] = useInView({ threshold: 1 });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.9 });
  const [refThree, inViewThree] = useInView({ threshold: 0.4 });
  
  useEffect(() => {
    if (inViewOne) {
      setCurrent('one');
      dispatch(setCurrentTab('one'));
    }
    if (inViewTwo) {
      setCurrent('two');
      dispatch(setCurrentTab('two'));
    }
    if (inViewThree) {
      setCurrent('three');
      dispatch(setCurrentTab('three'));
    }
  }, [inViewOne, inViewTwo, inViewThree, dispatch]);

  return (
    <section className={styles.content_left}>
      <div className={`${ 'p40' } ${ 'pb-5' }` }>
        <h1 className={` ${ 'text' } ${ 'text_type_main-large' }` }>Соберите бургер</h1>
      </div>
      
      <div className={styles.tab_content}>
        <div data-header className={styles.tab_nav}>
          <TabL
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            handleTabClick={handleTabClick}
            current={current}
          />
        </div>
        
        <div className={`${styles.scrollbox} ${'custom-scroll'}`}>

          <div id="one" ref={refOne}>
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' } ${ 'pl-0' } ${ 'pt-0' } ${ 'pr-0' } ${ 'pb-6' }` }>Булки</h2>
            <div className={styles.ingr_holder}>  
              {/* <CardBun data={ingredients} /> */}
              <CardBun data={ingredients.filter(ingredient => ingredient.type === 'bun')} />
            </div>
          </div>
          
          <div id="two" ref={refTwo}>
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' } ${ 'pl-0' } ${ 'pt-0' } ${ 'pr-0' } ${ 'pb-6' }` }>Соусы</h2>
            <div className={styles.ingr_holder}>  
              {/* <CardSauce data={ingredients} /> */}
              <CardSauce data={ingredients.filter(ingredient => ingredient.type === 'sauce')} />
            </div>
          </div>
          
          <div id="three" ref={refThree}>
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' } ${ 'pl-0' } ${ 'pt-0' } ${ 'pr-0' } ${ 'pb-6' }` }>Начинки</h2>
            <div className={styles.ingr_holder}>  
              {/* <CardMain data={ingredients} /> */}
              <CardMain data={ingredients.filter(ingredient => ingredient.type === 'main')} />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default BurgerIngredients;
