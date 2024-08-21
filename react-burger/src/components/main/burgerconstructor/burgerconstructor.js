import styles from './burgerconstructor.module.css';
import { useSelector } from 'react-redux';

import TopElement from './top-element/top-element.jsx';
import MainElement from './main-element/main-element.jsx';
import BottomElement from './bottom-element/bottom-element.jsx';
import BottomPrice from './bottom-price/bottom-price.jsx';

function BurgerConstructor() {
    const ingredients = useSelector(state => state.burgerConstructor.ingredients); // Выборка ингредиентов

    return (
      <section className={` ${styles.content_right} ${ 'pt-25' }`} >
        <TopElement />
        <MainElement />
        <BottomElement items={ingredients} />
        <BottomPrice />
      </section>
    );
}

export default BurgerConstructor;
