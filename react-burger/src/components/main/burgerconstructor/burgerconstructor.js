import styles from './burgerconstructor.module.css';
import { data } from '../utils/data.js';
import TopElement from './top-element/top-element.jsx';
import MainElement from './main-element/main-element.jsx';
import BottomElement from './bottom-element/bottom-element.jsx';
import BottomPrice from './bottom-price/bottom-price.jsx';

function BurgerConstructor() {
    return (
      <section className={` ${styles.content_right} ${ 'pt-25' }`} >
        <TopElement items={data} />
        <MainElement items={data} />
        <BottomElement items={data} />
        <BottomPrice />      
      </section>
    );
  }

export default BurgerConstructor;